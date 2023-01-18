import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			{/* TODO: use logo here */}
			<div className="header">
				<h1>GetSnapped.gg</h1>
				<div className="header-links">
					<Link to="/eye">SnapEye</Link>
					<Link to="/builder">SnapBuilder</Link>
					<Link to="/bravery">SnapBravery</Link>
					<Link to="/archetype">SnapArchetype</Link>
					<Link to="/decks">Deck Lists</Link>
					<Link to="/about">About</Link>
				</div>
				<div className="login-links">
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</div>
			</div>
		</>
	);
};
export default Header;
