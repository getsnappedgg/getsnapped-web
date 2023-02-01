import { useEffect, useState } from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCards, reset } from "../../features/cards/cardsSlice";
import { Card as MarvelCard } from "../../lib/types/Card";
import CardFilterMenu from "../CardFilterMenu/CardFilterMenu";
import Spinner from "../Spinner/Spinner";
import "./CardGrid.scss";

const CardGrid = ({ getSingleCardData }: any) => {
	const navigate = useNavigate();
	const dispatch: any = useDispatch();

	let { cards, isLoading, isError, message } = useSelector(
		(state: any) => state.cards
	);
	// const [cardList, setCardList] = useState(cards);

	// const options = {
	// 	distance: 100,
	// 	threshold: 0.4,
	// 	keys: ["name"],
	// };
	// const fuse = new Fuse(cardList, options);

	const [showCardFilter, setShowCardFilter] = useState(false);

	useEffect(() => {
		console.log("im running");
		if (isError) {
			console.log(message);
		}
		console.log("dispatching");
		dispatch(getCards());
		return () => {
			dispatch(reset());
		};
	}, [navigate, isError, message, dispatch]);

	// useEffect(() => {
	// 	if (cardList.length == 0) {
	// 		setCardList(cards);
	// 	}
	// }, [cardList]);

	const openCardFilterOptions = (e: any) => {
		e.preventDefault();
		setShowCardFilter(!showCardFilter);
	};
	const onCardHover = (e: any) => {
		e.preventDefault();

		const {
			name,
			id,
			cost,
			power,
			description,
			sourceId: source,
			imageLink,
		} = cards[e.target.id];
		const singleCard = {
			name,
			id,
			cost,
			power,
			description,
			source,
			imageLink,
		};
		getSingleCardData(singleCard);
	};
	const onImageClick = (e: any) => {
		e.preventDefault();
		console.log("im clicked");
	};
	// const handleSearchChange = (e: any) => {
	// 	e.preventDefault();

	// 	const search = e.target.value;
	// 	console.log(fuse.search(search));
	// 	setCardList(fuse.search(search));
	// };

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<div>
				<div className="m-2">
					<h1 className="font-semi-bold text-2xl text-white">Instructions</h1>
					<p className="text-slate-200">
						Start by hovering and selecting a card from the available card
						library on the left side of the screen. Use the filters and search
						bar to easily find specific cards or card types. When you are ready
						to save your deck, click the "Save" button, or the "Reset" button if
						you want to start over.
					</p>
				</div>
				<div className="flex justify-end">
					<button
						className="m-2 pt-2 pb-2 pl-6 pr-6 bg-primary hover:bg-dark-accent rounded border-slate-300 text-white "
						onClick={openCardFilterOptions}
					>
						Sort/Filter Cards
					</button>
				</div>
				{showCardFilter ? (
					<div className="card-filter-options">
						<CardFilterMenu
						// fuse={fuse}
						// handleSearchChange={handleSearchChange}
						/>
					</div>
				) : null}
			</div>
			<section className="grid card-grid grid-flow-row grid-cols-3 overscroll-contain overflow-auto auto-rows-max h-[528px] bg-neutral-gray lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 mt-4">
				{cards.map((card: MarvelCard, i: any) => {
					const image = card.imageLink;
					return (
						<div className="m-1" key={i} onClick={() => {}}>
							<img
								className="m-0 cursor-pointer hover:scale-110 transition ease-in-out duration-125"
								id={i}
								src={image}
								onMouseOver={onCardHover}
							/>
							<h6 className="font-light text-slate-200 text-center">
								{card.name}
							</h6>
						</div>
					);
				})}
			</section>
		</>
	);
};
export default CardGrid;
