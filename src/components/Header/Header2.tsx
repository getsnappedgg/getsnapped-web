import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header2 = () => {
	return (
		<>
			{/* TODO: use logo here */}
			<Navbar sticky="top" variant="dark" bg="dark">
				<Container>
					<Navbar.Brand href="#home">GetSnapped.gg</Navbar.Brand>
					<div className="navlinks">
						<Link
							to="/eye"
							className="no-underline m-1 p-1 transition ease-in-out text-neutral-400 hover:text-violet-500"
						>
							SnapEye
						</Link>
						<Link
							to="/builder"
							className="no-underline m-1 p-1 transition ease-in-out text-neutral-400 hover:text-violet-500"
						>
							SnapBuilder
						</Link>
						<Link
							to="/bravery"
							className="no-underline m-1 p-1 transition ease-in-out text-neutral-400 hover:text-violet-500"
						>
							SnapBravery
						</Link>
						<Link
							to="/archetype"
							className="no-underline m-1 p-1 transition ease-in-out text-neutral-400 hover:text-violet-500"
						>
							SnapArchetype
						</Link>
						<Link
							to="/decks"
							className="no-underline m-1 p-1 transition ease-in-out text-neutral-400 hover:text-violet-500"
						>
							Deck Lists
						</Link>
						<Link
							to="/about"
							className="no-underline m-1 p-1 transition ease-in-out text-neutral-400 hover:text-violet-500"
						>
							About
						</Link>
					</div>
					<Nav className="login-links">
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};
export default Header2;
