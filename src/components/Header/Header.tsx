import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<>
			{/* TODO: use logo here */}
			<Navbar sticky="top" variant="dark" bg="dark">
				<Container>
					<Navbar.Brand href="#home">GetSnapped.gg</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/eye">SnapEye</Nav.Link>
						<Nav.Link href="/builder">SnapBuilder</Nav.Link>
						<Nav.Link href="/bravery">SnapBravery</Nav.Link>
						<Nav.Link href="/archetype">SnapArchetype</Nav.Link>
						<Nav.Link href="/decks">Deck Lists</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
					<Nav className="login-links">
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};
export default Header;
