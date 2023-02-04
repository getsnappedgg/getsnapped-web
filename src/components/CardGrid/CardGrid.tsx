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

const CardGrid = ({ getSingleCardData, onCardClick }: any) => {
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
	const handleCardClick = (e: any) => {
		e.preventDefault();
		const id = e.target.id;
		const card = cards[id];
		onCardClickGrayscale(e);
		onCardClick(card);
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

	const onCardClickGrayscale = (e: any) => {
		e.preventDefault();
		console.log(e.target.classList);
		if (e.target.classList.contains("grayscale")) {
			e.target.classList.remove("grayscale");
			e.target.classList.add("grayscale-0");
		} else if (e.target.classList.contains("grayscale-0")) {
			e.target.classList.remove("grayscale-0");
			e.target.classList.add("grayscale");
		}
	};
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<div className="flex flex-col">
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
						<div className="m-1" key={i}>
							<button className="transition ease-in-out">
								<img
									className="m-0 cursor-pointer hover:scale-110 active:scale-75 transition ease-in-out duration-125 grayscale-0"
									id={i}
									src={image}
									onMouseOver={onCardHover}
									onClick={handleCardClick}
								/>
							</button>
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
