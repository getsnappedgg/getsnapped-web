import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<section className="navbar flex justify-between bg-neutral-700 w-screen sticky top-0">
				{/* GetSnapped.gg */}
				<Link
					to="/"
					className="text-3xl m-1 p-1 hover:text-violet-500 text-neutral-50 no-underline"
				>
					GetSnapped.gg
				</Link>
				<nav className="hidden sm:justify-center md:flex">
					{[
						["Deck Builder", "/builder"],
						["Database", "/eye"],
						["Agatha Bravery", "/bravery"],
					].map(([title, url]) => (
						<Link
							to={url}
							key={title}
							className="no-underline m-2 p-2 transition ease-in-out text-neutral-400 hover:text-violet-500"
						>
							{title}
						</Link>
					))}
				</nav>
				{/* Logged In */}
				{/* <nav className=""></nav> */}

				{/* Logged Out */}
				<nav className="login hidden md:flex">
					<Link to="/login">
						<button className="m-2 pt-2 pb-2 pl-6 pr-6 bg-violet-500 hover:bg-violet-600 rounded border-slate-300 text-white">
							Login
						</button>
					</Link>
					<Link to="/register">
						<button className="m-2 pt-2 pb-2 pl-6 pr-6 bg-violet-500 hover:bg-violet-600 rounded border-slate-300 text-white">
							Register
						</button>
					</Link>
				</nav>
				<div className="space-y-2 cursor-pointer m-2 p-2 md:hidden">
					<span className="block w-8 rounded h-0.5 bg-neutral-200"></span>
					<span className="block w-8 rounded h-0.5 bg-neutral-200"></span>
					<span className="block w-8 rounded h-0.5 bg-neutral-200"></span>
				</div>
			</section>
		</>
	);
};
export default Header;
