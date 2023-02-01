import { lazy, useState } from "react";
import CardGrid from "../components/CardGrid/CardGrid";
import SingleCardViewer from "../components/SingleCard/SingleCard";
import UserDeckBuilder from "../components/UserDeckBuilder/UserDeckBuilder";
import { Card } from "../lib/types/Card";
interface SnapBuilderProps {
	// myprop: number;
}
const SnapBuilder: React.FC<SnapBuilderProps> = () => {
	const [card, setCard] = useState({});
	const getSingleCardData = (data: Partial<Card>) => {
		setCard(data);
	};
	return (
		<>
			{/* Deck Viewer */}
			<div className="grid lg:grid-cols-12 p-4 gap-2">
				<section className="overscroll-auto col-span-7">
					<CardGrid getSingleCardData={getSingleCardData} />
				</section>

				<section className="hidden lg:flex flex-col col-span-5  ">
					<UserDeckBuilder />
					<div className="mt-4">
						<SingleCardViewer card={card} />
					</div>
				</section>
			</div>
		</>
	);
};
export default SnapBuilder;
