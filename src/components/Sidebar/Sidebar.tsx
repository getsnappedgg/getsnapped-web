const Sidebar = () => {
	return (
		<section className="flex-col fixed left-0 top-0 bottom-0 h-screen z-10 w-16 transition-all ease-in-out duration-75 hover:w-64 sm:hidden md:flex">
			<div className="sidebar bg-gray h-screen">
				<nav className="">
					<p className="m-1 p-1 hover:bg-neutral-300 rounded">Deck Builder</p>
					<p className="m-1 p-1 hover:bg-neutral-300 rounded">Database</p>
					<p className="m-1 p-1 hover:bg-neutral-300 rounded">Test</p>
					<p className="m-1 p-1 hover:bg-neutral-300 rounded">Test</p>
				</nav>
			</div>
		</section>
	);
};
export default Sidebar;
