import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCards, reset } from "../../features/cards/cardsSlice";
import { Card as MarvelCard } from "../../lib/types/Card";
import Spinner from "../Spinner/Spinner";
import "./CardGrid.scss";

const CardGrid = () => {
	const navigate = useNavigate();
	const dispatch: any = useDispatch();

	let { cards, isLoading, isError, message } = useSelector(
		(state: any) => state.cards
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(getCards());
		return () => {
			dispatch(reset());
		};
	}, [navigate, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}
	const onCardHover = (e: any) => {
		e.preventDefault();
		console.log("hovering the card: ");
	};
	const onImageClick = (e: any) => {
		e.preventDefault();
		console.log("im clicked");
	};

	return (
		<>
			<section className="grid grid-flow-row grid-cols-3 overflow-auto auto-rows-max bg-slate-700 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
				{cards.map((card: MarvelCard, i: any) => {
					const image = card.imageLink;
					console.log(card);
					return (
						// <Col lg="3" key={i} onMouseOver={() => onCardHover}>
						<div className="m-0" onClick={() => {}}>
							<img className="m-0" src={image} />
							<h6 className="font-light text-slate-200 text-center">
								{card.name}
							</h6>
							{/* <img
									src={image}
									className="card-image"

								/> */}
						</div>
						// </Col>
					);
				})}
			</section>
		</>
	);
};
export default CardGrid;
