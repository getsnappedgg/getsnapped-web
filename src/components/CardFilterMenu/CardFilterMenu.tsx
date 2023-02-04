const CardFilterMenu = (/*{ fuse, handleSearchChange*/) => {
	return (
		<>
			<section className="flex flex-row border border-gray h-60 justify-around text-white flex-wrap">
				{/* <div className="flex flex-col">
					<label className="m-2 text-neutral-100 text-lg font-semibold mb-2">
						Search
					</label>
					<input
						className="m-2 placeholder:p-2 text-white bg-slate-600 rounded-xl p-3"
						type="text"
						placeholder="Search (e.g. Hulk)"
						// onChange={handleSearchChange}
					/>
				</div> */}
				<div className="flex flex-col flex-wrap p-4">
					<h1>Sort By:</h1>
					<form>
						<div className="p-2">
							<input type="radio" name="sortOption" value="name" />
							<label htmlFor="name" className="px-2">
								NAME
							</label>
						</div>
						<div className="p-2">
							<input type="radio" name="sortOption" value="energy" />
							<label className="px-2">ENERGY</label>
						</div>
						<div className="p-2">
							<input type="radio" name="sortOption" value="cost" />
							<label className="px-2">COST</label>
						</div>
						<div className="p-2">
							<input type="radio" name="sortOption" value="power" />
							<label className="px-2">POWER</label>
						</div>
					</form>
				</div>

				<div className="flex-grow p-4">Filter</div>
			</section>
		</>
	);
};
export default CardFilterMenu;
