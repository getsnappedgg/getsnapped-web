import { useState } from "react";

const UserDeckBuilder = () => {
	// const [deckList, setDeckList] = useState([]);
	const deckList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<>
			<section className="grid auto-rows-max grid-cols-6 grid-rows-2 gap-2 w-full h-72 border-slate-200 mt-4 border p-2">
				{deckList.map((card, i) => {
					return (
						<div key={i} className="border border-white text-white rounded-lg">
							{card}
						</div>
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
