"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function Home() {
	const url = usePathname();
	const [content, setContent] = useState("# Loading...");
	const mdPath = `/exemplars${url}.mdx`;

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
	}, []);

	return (
		<section className="pt-14 pb-12 pl-[24.5rem] pr-20">
			<div className="text-left">
				<ReactMarkdown className="markdown" children={content} />
			</div>
		</section>
	);
}