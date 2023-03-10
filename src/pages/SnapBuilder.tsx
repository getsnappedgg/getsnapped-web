import { lazy, useEffect, useState } from "react";
import CardGrid from "../components/CardGrid/CardGrid";
import SingleCardViewer from "../components/SingleCard/SingleCard";
import UserDeckBuilder from "../components/UserDeckBuilder/UserDeckBuilder";
import { Card } from "../lib/types/Card";
interface SnapBuilderProps {
	// myprop: number;
}
const SnapBuilder: React.FC<SnapBuilderProps> = () => {
	const [singleCard, setSingleCard] = useState({});
	const [cardGridReset, setCardGridReset] = useState(false);
	const [userDeck, setUserDeck] = useState(Array<Partial<Card>>);
	const deckLength = 12;
	useEffect(() => {
		console.log("rerendering snap builder");
	}, [userDeck]);
	const getSingleCardData = (data: Partial<Card>) => {
		setSingleCard(data);
	};
	const onCardClick = (clickedCard: Partial<Card>) => {
		// remove card from decklist
		if (!userDeck.includes(clickedCard) && userDeck.length < deckLength) {
			setUserDeck([...userDeck, clickedCard]);
		} else {
			//remove card from decklist
			setUserDeck(userDeck.filter(c => c !== clickedCard));
		}
	};
	const handleUserDeckReset = (e: any) => {
		setCardGridReset(true);
		setUserDeck([]);
	};
	const removeCard = (card: any) => {
		console.log(card);
		setUserDeck(
			userDeck.filter(c => {
				return c != card;
			})
		);
		// setUserDeck()
	};
	return (
		<>
			{/* Deck Viewer */}
			<div className="grid lg:grid-cols-12 p-4 gap-2">
				<section className="overscroll-auto col-span-7">
					<div className="m-2">
						<h1 className="font-semi-bold text-2xl text-white">Instructions</h1>
						<p className="text-slate-200">
							Start by hovering and selecting a card from the available card
							library on the left side of the screen. Use the filters and search
							bar to easily find specific cards or card types. When you are
							ready to save your deck, click the "Save" button, or the "Reset"
							button if you want to start over.
						</p>
					</div>
					<CardGrid
						getSingleCardData={getSingleCardData}
						onCardClick={onCardClick}
						userDeck={userDeck}
						cardGridReset={cardGridReset}
					/>
				</section>

				<section className="hidden lg:flex flex-col col-span-5  ">
					<UserDeckBuilder cards={userDeck} removeCard={removeCard} />
					<div className="flex justify-end">
						<button className="m-2 pt-2 pb-2 pl-6 pr-6 bg-primary hover:bg-dark-accent rounded border-slate-300 text-white ">
							Save
						</button>
						<button
							className="m-2 pt-2 pb-2 pl-6 pr-6 bg-primary hover:bg-dark-accent rounded border-slate-300 text-white"
							onClick={handleUserDeckReset}
						>
							Reset
						</button>
					</div>
					<div className="mt-4">
						<SingleCardViewer card={singleCard} />
					</div>
				</section>
			</div>
		</>
	);
};
export default SnapBuilder;
