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
			<Container fluid className="grid">
				<Row className="justify-content-md-center">
					{cards.map((card: MarvelCard, i: any) => {
						const image = card.imageLink;
						console.log(card);
						return (
							// <Col lg="3" key={i} onMouseOver={() => onCardHover}>
							<Card className="card" onClick={() => { }}>
								<Card.Title className="card-name">{card.name}</Card.Title>
								<Card.Img className="card-image" src={image} />
								{/* <img
									src={image}
									className="card-image"

								/> */}
							</Card>
							// </Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};
export default CardGrid;
