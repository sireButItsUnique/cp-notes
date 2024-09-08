"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar.jsx";
import Blur from "@/components/blur/blur";

export default function DocLayout({ children }) {
	const url = usePathname();
	const page = "/" + url.match(/([^\/]*)$/)[1];
	const blurPos = [
		["5rem", "5rem"],
		["2rem", "20rem"],
		["60rem", "0rem"],
		["10rem", "25rem"],
		["30rem", "20rem"]
	];
	const [sidebarLinks, setSidebarLinks] = useState(false);

	useEffect(() => {
		fetch("/api/fetchExemplarData", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				for (const header in data) {
					for (let i = 0; i < data[header].length; i++) {
						if (data[header][i][1] == page) {
							data[header][i][2] = true;

							break;
						}
					}
				}

				setSidebarLinks(data);
			});
	}, []);

	return (
		<main>
			<div>
				<section className="relative">
					{sidebarLinks ? (
						<Sidebar loaded={true} sections={sidebarLinks} setSections={setSidebarLinks} fetchPath={"/api/fetchExemplarData"}/>
					) : (
						<Sidebar loaded={false} sections={sidebarLinks} setSections={setSidebarLinks} fetchPath={"/api/fetchExemplarData"}/>
					)}
				</section>

				<section className="relative">
					<Blur />
					{children}
				</section>
			</div>
		</main>
	);
}
