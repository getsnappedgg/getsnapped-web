import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<section className="navbar bg-neutral-700 p-0 ml-16">
				{/* GetSnapped.gg */}
				<Link
					to="/"
					className="text-3xl m-1 p-1 hover:text-violet-500 text-neutral-50 no-underline"
				>
					GetSnapped.gg
				</Link>
				<nav className="flex sm:justify-center space-x-4">
					{[
						["Deck Builder", "/builder"],
						["Database", "/eye"],
						["Projects", "/projects"],
						["Reports", "/reports"],
					].map(([title, url]) => (
						<Link
							to={url}
							className="no-underline m-1 p-1 transition ease-in-out text-neutral-400 hover:text-violet-500"
						>
							{title}
						</Link>
					))}
				</nav>
				<nav></nav>
				{/* Logged In */}
				{/* <nav className=""></nav> */}

				{/* Logged Out */}
				<nav className=""></nav>
			</section>
		</>
	);
};
export default Header;
