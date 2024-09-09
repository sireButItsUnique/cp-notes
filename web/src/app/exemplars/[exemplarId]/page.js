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
	const [header, setHeader] = useState("# Loading...");
	const [code, setCode] = useState("...");
	const [commentary, setCommentary] = useState("...");
	const headerPath = `/data${url}/header.mdx`;
	const commentaryPath = `/data${url}/commentary.mdx`;
	const codePath = `/data${url}/code.cpp`;
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		fetch(headerPath)
			.then((res) => res.text())
			.then((text) => {
				let regex = new RegExp("__next_error__", "i");
				if (text.match(regex)) {
					setHeader("# Page doesn't exist");
				} else {
					setHeader(text);
				}
			});
		fetch(commentaryPath)
			.then((res) => res.text())
			.then((text) => {
				setCommentary(text);
				Prism.highlightAll();
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
		
			<div className="inline flex justify-between">
				<div className="text-left">
					<ReactMarkdown className="markdown" children={header} />
				</div>
				<div className="justify-end flex-none content-center">
					<button className={`${showCode ? "swap": ""} material-bubble w-full mb-[1rem] text-text-header block border border-text-header rounded py-1.5 px-3`} onClick={() => {
						setShowCode(false);
					}}>
						Commentary
					</button>
					<button className={`${showCode ? "swapRev": ""} material-bubble w-full mt-[1rem] text-text-header block border border-text-header rounded py-1.5 px-3`} onClick={() => {
						setShowCode(true);
					}}>
						Code
					</button>
				</div>
			</div>
			
			{!showCode && <div className="text-left">
				<ReactMarkdown className="markdown" children={commentary} />
			</div>}
			{showCode && <pre className="language-cpp border-none" >
				<code className="language-cpp border-none">
					{code}
				</code>
			</pre>}
		</section>
	);
}
