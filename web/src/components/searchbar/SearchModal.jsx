import { useEffect, useState } from "react";
import Link from "next/link";
import Searchbar from "@/components/searchbar/Searchbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function getIndividual(regex, size, individual) {
	if (individual.match(regex)) {
		let begin = individual.match(regex).index;

		return (
			<div className="group-hover:text-text-header flex">
				<span className="transition-colors duration-200 whitespace-pre">{individual.substr(0, begin)}</span>
				<span className="gradient font-bold whitespace-pre">{individual.substr(begin, size)}</span>
				<span className="transition-colors duration-200 whitespace-pre">
					{individual.substr(begin + size, individual.length - begin - size)}
				</span>
			</div>
		);
	}

	return <h3 className="transition-colors duration-200 hover:text-text-header whitespace-pre">{individual}</h3>;
}

export default function SearchModal(props) {
	let { modalState, setModalState, sections, setSections, fetchPath } = props;

	const [search, setSearch] = useState("");
	const [allResults, setAllResults] = useState(false);
	const [searchResults, setSearchResults] = useState(false);

	useEffect(() => {
		console.log("fetching " + fetchPath);
		fetch(fetchPath, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((text) => {
				console.log(text)
				setAllResults(text);
				setSearchResults(text);
			});
	}, []);

	function closeModal() {
		setModalState((prev) => !prev);
	}

	return (
		<>
			{modalState && (
				<div className="z-[50] fixed left-0 right-0 bottom-0 top-0 bg-transparent" onClick={closeModal} />
			)}
			<dialog
				open={modalState}
				className="z-[60] overscroll-contain fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 bg-bg-secondary px-6 py-6 border border-border rounded"
			>
				<div className="relative pt-10">
					<FontAwesomeIcon
						icon={faXmark}
						className="text-xl absolute top-0 right-0 cursor-pointer text-text-danger"
						onClick={(e) => {
							closeModal();
						}}
					/>

					<Searchbar
						placeholder="Search"
						fullWidth={true}
						searchInput={search}
						setSearchInput={setSearch}
						allResults={allResults}
						setSearchResults={setSearchResults}
					/>

					<div className="overflow-y-scroll max-h-[55vh] text-center mt-6 mb-4 text-text-body pr-6 pb-6">
						{searchResults && Object.keys(searchResults).length ? (
							Object.keys(searchResults).map((curHeader, curHeaderIdx) => {
								return (
									<div key={curHeaderIdx}>
										<h3 className="text-text-header text-lg font-bold text-left mt-4">
											{curHeader}
										</h3>

										<div className="flex flex-col justify-center items-start">
											{searchResults[curHeader].map((individual, individualIdx) => {
												const adjResIdx = curHeaderIdx + individualIdx;
												const title = individual[0];
												const link = individual[1];

												return (
													<Link
														key={adjResIdx}
														href={link}
														onClick={(e) => {
															let sectionCpy = {
																...sections,
															};

															for (const header in sections) {
																for (let i = 0; i < sections[header].length; i++) {
																	sectionCpy[header][i][2] = false;
																}
															}

															sectionCpy[curHeader][individualIdx][2] = true;

															setSections(sectionCpy);
															closeModal();
														}}
														className="group border border-border px-4 py-2 rounded flex flex-row justify-between items-center w-full mt-4 transition-colors duration-200 hover:bg-bg-tertiary"
													>
														{getIndividual(new RegExp(search, "i"), search.length, title)}

														<FontAwesomeIcon
															icon={faArrowRight}
															className="text-[#ba9ffb]"
														/>
													</Link>
												);
											})}
										</div>
									</div>
								);
							})
						) : (
							<h3 className="mt-6">No Results</h3>
						)}
					</div>
				</div>
			</dialog>
		</>
	);
}
