import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/material-bubble.scss";
import "./styles/shrink-border.scss";
import "./styles/swap.scss";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar.jsx";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CP Notes",
	description: "Documentation and usage for the Corrosion Language",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" href="/images/logo.png" sizes="any"></link>
			
			<body className={inter.className}>
				<Navbar />

				{children}
			</body>
		</html>
	);
}
