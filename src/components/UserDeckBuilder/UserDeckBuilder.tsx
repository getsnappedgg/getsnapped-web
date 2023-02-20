import { useEffect, useState } from "react";
import { Card } from "../../lib/types/Card";

const UserDeckBuilder = ({ cards, removeCard }: any) => {
	cards.sort((a: any, b: any) => {
		return a.cost - b.cost;
	});
	const handleCardClick = (e: any) => {
		e.preventDefault();
		console.log(e.target);
		console.log(cards);
		removeCard(cards[e.target.id]);
	};
	return (
		<>
			<section className="grid auto-rows-max grid-cols-6 grid-rows-2 gap-0 w-full h-64 border-slate-300 rounded-lg mt-4 border p-0">
				{cards.map((card: Partial<Card>, i: any) => {
					return (
						<img
							className="border-gray mt-2 scale-125 p-0"
							key={card.id}
							id={i}
							src={card.imageLink}
							onClick={handleCardClick}
						/>
					);
				})}
			</section>
		</>
	);
};
export default UserDeckBuilder;
