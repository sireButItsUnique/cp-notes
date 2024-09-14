"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Prism from 'prismjs';
import { MDXRemote } from 'next-mdx-remote/rsc'
import "./prism-vscode.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

export default async function Home() {
	const url = usePathname();
	const [content, setContent] = useState("# Loading...");
	const mdPath = `/data${url}.mdx`;
	useEffect(() => {
		fetch(mdPath)
			.then(res => res.text())
			.then((text) => {
				setContent(text);
			});
	}, []);

	return (
		<section className="pt-14 pb-12 pl-[24.5rem] pr-20">
			<div className="text-left">
				<div className="markdown">
					<MDXRemote source={content}>
						{setTimeout(() => {
							Prism.highlightAll();
						}, 500)}
					</MDXRemote>
				</div>
			</div>
		</section>
	);
}
