import { AsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCards, reset } from "../../features/cards/cardsSlice";
import Spinner from "../Spinner/Spinner";

const cardGridContainerStyle = {
	display: "flex",
	flexDirection: "row",
};
const imageStyle = {
	width: "100%",
	height: "100%",
};
const cardNameStyle = {
	textAlign: "center",
	margin: "1",
};
const gridBoxStyle = {
	width: "200px",
	paddingTop: "5px",
	height: "100%",
	border: "1px  solid black",
};

const CardGrid = () => {
	const navigate = useNavigate();
	const dispatch: any = useDispatch();

	const { cards, isLoading, isError, message } = useSelector(
		(state: any) => state.cards
	);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(getCards());
		console.log("gettingcards");
		return () => {
			dispatch(reset());
		};
	}, [navigate, isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<Container fluid style={cardGridContainerStyle}>
				<Row className="justify-content-md-center">
					{cards.map((card, i) => {
						const image = card.imageLink;
						return (
							<Col lg="3" className="col-lg-3" key={i} style={gridBoxStyle}>
								<img src={image} style={imageStyle} />
								<p style={cardNameStyle}>{card.name}</p>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};
export default CardGrid;
