"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
	const [github, setGithub] = useState(false);

	return (
		<>
			<nav className="z-40 backdrop-blur-xl px-12 py-2 flex flex-row justify-between border-b items-center border-border text-text-header fixed top-0 right-0 left-0">
				<div>
					<Link href="/" className="flex flex-row justify-center items-center gap-[0.05rem]">
						<Image src="/images/logo.png" width="35" height="35" alt="Logo" />

						<span className="font-bold text-xl"></span>
					</Link>
				</div>

				<div className="">
					<ul className="flex flex-row justify-center items-center gap-8">
						<li>
							<Link href="/exemplars/24s3" className="link animate-underline">
								Exemplars
								<span className="text-underline"></span>
							</Link>
						</li>
						<li>
							<Link href="/docs/environment" className="link animate-underline">
								Docs
								<span className="text-underline"></span>
							</Link>
						</li>
						<li className="mb-[-0.25rem]">
							<button
								onClick={() => {
									setGithub(!github);
								}}
							>
								<FontAwesomeIcon icon={faGithub} className="text-2xl fade" />
							</button>
						</li>
					</ul>
				</div>
			</nav>

			<div
				className={`absolute right-8 top-12 z-40 transition-opacity duration-200 ${
					!github ? "z-0 opacity-0" : "flex flex-row-reverse opacity-100"
				}`}
			>
				<div className="relative shadow-xl flex flex-col justify-center items-end gap-3 border border-border bg-bg-secondary rounded px-4 py-2">
					<Link
						className="link animate-underline"
						href="https://github.com/sireButItsUnique/cp-notes"
						target="_blank"
						rel="noreferrer"
					>
						Source
						<span className="text-underline"></span>
					</Link>
				</div>
			</div>
		</>
	);
}
