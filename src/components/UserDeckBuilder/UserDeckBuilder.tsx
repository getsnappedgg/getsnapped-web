import { useEffect, useState } from "react";
import { Card } from "../../lib/types/Card";

const UserDeckBuilder = ({ cards }) => {
	cards.sort((a, b) => {
		return a.cost - b.cost;
	});
	return (
		<>
			<section className="grid auto-rows-max grid-cols-6 grid-rows-2 gap-0 w-full h-64 border-slate-300 rounded-lg mt-4 border p-0">
				{cards.map((card: Partial<Card>) => {
					return (
						<img
							src={card.imageLink}
							key={card.id}
							className="  border-gray mt-2 scale-125 p-0"
						/>
					);
				})}
			</section>

			<div className="flex justify-end">
				<button className="m-2 pt-2 pb-2 pl-6 pr-6 bg-primary hover:bg-dark-accent rounded border-slate-300 text-white ">
					Save
				</button>
				<button className="m-2 pt-2 pb-2 pl-6 pr-6 bg-primary hover:bg-dark-accent rounded border-slate-300 text-white ">
					Reset
				</button>
			</div>
		</>
	);
};
export default UserDeckBuilder;
