'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Prism from 'prismjs';
import "./prism-vscode.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

export default function Home() {
	const url = usePathname();
	const [content, setContent] = useState("# Loading...");
	const [code, setCode] = useState("...");
	const mdPath = `/data${url}.mdx`;
	const codePath = `/data${url}.cpp`;

	useEffect(() => {
		fetch(mdPath)
			.then((res) => res.text())
			.then((text) => {
				let regex = new RegExp("__next_error__", "i");
				if (text.match(regex)) {
					setContent("# Page doesn't exist");
				} else {
					setContent(text);
				}
			});
		fetch(codePath)
		.then((res) => res.text())
		.then((text) => {
			setCode(text);
			Prism.highlightAll();
		});
		
	}, []);

	return (
		<section className="pt-14 pb-12 pl-[24.5rem] pr-20">
			<div className="text-left">
				<ReactMarkdown className="markdown" children={content} />
			</div>
			<pre class="language-cpp line-numbers" >
				<code class="language-cpp">
					{code}
				</code>
			</pre>
		</section>
	);
}
