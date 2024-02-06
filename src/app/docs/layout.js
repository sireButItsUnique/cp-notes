"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar.jsx";
import directoryData from "../../data/directoryData.js";

export default function DocLayout({ children }) {
	const url = usePathname();
	const page = "/" + url.match(/([^\/]*)$/)[1];
	const [sidebarLinks, setSidebarLinks] = useState(false);

	useEffect(() => {
		for (const header in directoryData) {
			for (let i = 0; i < directoryData[header].length; i++) {
				if (directoryData[header][i][1] == page) {
					directoryData[header][i][2] = true;
					break;
				}
			}
		}

		setSidebarLinks(directoryData);
	}, []);

	return (
		<main>
			<div>
				<section className="relative">
					{sidebarLinks ? (
						<Sidebar
							loaded={true}
							sections={sidebarLinks}
							setSections={setSidebarLinks}
						/>
					) : (
						<Sidebar
							loaded={false}
							sections={sidebarLinks}
							setSections={setSidebarLinks}
						/>
					)}
				</section>

				<section className="relative">
					<Image
						className="absolute blur-3xl right-0 top-[5rem] z-40"
						src="/images/logo_blur.png"
						width="50"
						height="50"
					/>
					<section className="pt-14 pb-12 pl-[24.5rem] pr-20">
						<div className="text-left markdown">{children}</div>
					</section>
				</section>
			</div>
		</main>
	);
}
