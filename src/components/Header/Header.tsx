import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
	const [databaseNavActive, setDatabaseNavActive] = useState(false);

	const onDatabaseHover = (e: any) => {
		e.preventDefault();
		console.log(databaseNavActive);
		setDatabaseNavActive(!databaseNavActive);
	};

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const dropdownMenu = document.querySelector(".dropdown-menu");
			const navElement = document.querySelector(".nav-element");

			if (dropdownMenu && navElement) {
				if (
					!dropdownMenu.contains(e.target as Node) &&
					!navElement.contains(e.target as Node)
				) {
					setDatabaseNavActive(false);
				}
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<>
			<section className="navbar flex justify-between bg-slate-700 w-screen sticky top-0 z-10">
				{/* <section className="navbar flex justify-between bg-neutral-gray border-y-violet-300 border-b w-screen sticky top-0"> */}
				{/* GetSnapped.gg */}
				<Link
					to="/"
					className="text-3xl m-0 p-2 pl-5 text-neutral-50 no-underline
					bg-gradient-to-r from-violet-600 to-blue-500 "
				>
					GetSnapped.gg
				</Link>
				<nav className="hidden sm:justify-center lg:flex">
					{[
						["Deck Builder", "/builder"],
						["Agatha Bravery", "/bravery"],
					].map(([title, url]) => (
						<Link
							to={url}
							key={title}
							className="no-underline m-2 p-2 transition ease-in-out text-neutral-400 hover:text-primary"
						>
							{title}
						</Link>
					))}
					<div
						className="database-nav cursor-pointer no-underline flex flex-row m-2 p-2 transition ease-in-out text-neutral-400 hover:text-primary relative"
						onClick={onDatabaseHover}
					>
						<p>Database</p>
						<div className="mt-1 scale-125">
							<MdArrowDropDown />
						</div>
						{databaseNavActive ? (
							<div
								className="bg-gray absolute top-11 left-1 py-2 px-3 w-48 shadow-lg ease-in-out transition duration-75 opacity-100 rounded"
								style={{
									transform: "translate3d(0, 4px, 0)",
								}}
							>
								<Link
									to="/cards"
									className="block px-3 py-2 text-sm text-neutral-200 no-underline hover:bg-neutral-200 rounded"
								>
									Cards
								</Link>
								<a
									href="#"
									className="block px-3 py-2 text-sm text-neutral-800 no-underline hover:bg-neutral-200 rounded"
								>
									Decks
								</a>
								<a
									href="#"
									className="block px-3 py-2 text-sm text-neutral-800 no-underline hover:bg-neutral-200 rounded"
								>
									Locations
								</a>
							</div>
						) : null}
					</div>
				</nav>
				{/* Logged In */}
				{/* <nav className=""></nav> */}

				{/* Logged Out */}
				<nav className="login hidden lg:flex">
					<Link to="/login">
						<button className="m-2 pt-2 pb-2 pl-6 pr-6 bg-primary hover:bg-dark-accent rounded border-slate-300 text-highlight">
							Login
						</button>
					</Link>
					<Link to="/register">
						<button className="m-2 pt-2 pb-2 pl-6 pr-6 bg-primary hover:bg-dark-accent rounded border-slate-300 text-white">
							Register
						</button>
					</Link>
				</nav>
				<div className="space-y-2 cursor-pointer m-2 p-2 lg:hidden">
					<span className="block w-8 rounded h-0.5 bg-neutral-200"></span>
					<span className="block w-8 rounded h-0.5 bg-neutral-200"></span>
					<span className="block w-8 rounded h-0.5 bg-neutral-200"></span>
				</div>
			</section>
		</>
	);
};
export default Header;
