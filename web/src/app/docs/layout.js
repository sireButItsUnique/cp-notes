"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar.jsx";
import Blur from "@/components/blur/blur";

export default function DocLayout({ children }) {
	const url = usePathname();
	const page = "/docs/" + url.match(/([^\/]*)$/)[1];
	const [sidebarLinks, setSidebarLinks] = useState(false);

	useEffect(() => {
		fetch("/api/fetchDocData", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("sidebar: " + page)
				for (const header in data) {
					for (let i = 0; i < data[header].length; i++) {
						console.log(data[header][i][1]);
						if (data[header][i][1] == page) {
							data[header][i][2] = true;
							console.log("^ this one right here officer")
							break;
						} else {
							data[header][i][2] = false;
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
						<Sidebar loaded={true} sections={sidebarLinks} setSections={setSidebarLinks} fetchPath={"/api/fetchDocData"}/>
					) : (
						<Sidebar loaded={false} sections={sidebarLinks} setSections={setSidebarLinks} fetchPath={"/api/fetchDocData"}/>
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
