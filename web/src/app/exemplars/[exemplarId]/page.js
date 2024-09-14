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
	const headerPath = `/data${url}/header.json`;
	const commentaryPath = `/data${url}/commentary.mdx`;
	const codePath = `/data${url}/code.cpp`;

	const [directory, setDirectory] = useState("...");
	const [tags, setTags] = useState([]);
	const [header, setHeader] = useState("# Loading...");

	const [code, setCode] = useState("...");
	const [commentary, setCommentary] = useState("...");
	const [showCode, setShowCode] = useState(false);

	// getting all pages from data
	useEffect(() => {
		fetch(headerPath)
			.then((res) => res.json())
			.then((header) => {
				setHeader(header.title);
				setDirectory(header.directory);
				setTags(header.tags);
			});
		fetch(commentaryPath)
			.then((res) => res.text())
			.then((text) => {
				setCommentary(text);
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
			
			{/*Header text + Buttons*/}
			<div className="inline flex justify-between">
				<div className="text-left">
					<span className="flex inline items-center">
						<ReactMarkdown className="markdown mr-2" children={directory} />
						{tags.map(tag => <a className="mx-2 shrink-border" href={tag.link}>{tag.display}</a>)}
					</span>
					
					<ReactMarkdown className="markdown" children={header} />
				</div>
				
				<div className="justify-end flex-none content-center">
					<button className={`${showCode ? "swapA": "swapARev"} w-full material-bubble text-text-header block border border-text-header rounded py-1.5 px-3`} onClick={() => {
						setShowCode(false);
					}}>
						Commentary
					</button>
					<button className={`${showCode ? "swapB": "swapBRev"} w-full material-bubble text-text-header block border border-text-header rounded py-1.5 px-3`} onClick={() => {
						setShowCode(true);
					}}>
						Code
					</button>
				</div>
			</div>
			
			{/*Content*/}
			{!showCode && <div className="text-left">
				<ReactMarkdown className="markdown" children={commentary} />
			</div>}
			{showCode && <pre className="language-cpp border-none" >
				<code className="language-cpp border-none">
					{code}
				</code>
				{ // funny race condition
				setTimeout(() => {
					Prism.highlightAll()
				})}
			</pre>}
		</section>
	);
}