import { useState } from "react";
import CardGrid from "../components/CardGrid/CardGrid";

const AgathaBravery = () => {
	const [braveryCardList, setBraveryCardList] = useState([]);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		shuffleCards();
	};
	const shuffleCards = () => {};

	return (
		<>
			<section className="h-screen grid">
				<div>
					<CardGrid />
				</div>
				<div>
					<button
						className="rounded p-2 m-4 bg-primary text-highlight"
						type="submit"
						onClick={handleSubmit}
					>
						I'm Brave
					</button>
				</div>
			</section>
		</>
	);
};
export default AgathaBravery;
