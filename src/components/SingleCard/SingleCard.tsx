const SingleCardViewer = ({ card }: any) => {
	const { name, id, cost, power, description, source, imageLink } = card;
	if (!name) {
		console.log("no name");
		return (
			<>
				<div className="text-slate-300 container mt-24 mx-auto text-center">
					Hover over a card to see its details
				</div>
			</>
		);
	}
	return (
		<>
			{/* <section className="container grid-flow-row w-full p-0 grid grid-cols-2 ">
				<div className=" h-72 w-72 mx-auto">
					<img src={imageLink} className=" " />
				</div>
				<div className="card-info flex flex-col relative m-4 p-4">
					<div className="flex flex-row">
						<p className="text-light-accent m-0 font-semibold">NAME:&nbsp;</p>
						<p className="text-white m-0">{name.toUpperCase()}</p>
					</div>
					<p className="text-white m-1">Cost: {cost}</p>
					<p className="text-white m-1">Power: {power}</p>
					<p className="text-white m-1">Description: {description}</p>
					<p className="text-white">Collect{source}</p>
				</div>
			</section> */}
			<section className="w-full p-0 grid grid-cols-2 relative right-6">
				<div className="h-72 w-72">
					<img src={imageLink} className=" " />
				</div>
				<div className="card-info grid grid-cols-2 grid-rows-5 relative m-4 p-4 h-48 w-[340px] right-11">
					<p className="text-light-accent m-0 font-semibold">NAME&nbsp;</p>
					<p className="text-white m-0">{name.toUpperCase()}</p>
					<p className="text-light-accent m-0 font-semibold">COST&nbsp;</p>
					<p className="text-white m-0">{cost}</p>
					<p className="text-light-accent m-0 font-semibold">POWER&nbsp;</p>
					<p className="text-white m-0">{power}</p>
					<p className="text-light-accent m-0 font-semibold">
						DESCRIPTION&nbsp;
					</p>
					<p className="text-white m-0 col-start-1 row-start-5 col-span-2">
						{description}
					</p>
					{/* <p className="text-white">Collect{source}</p> */}
				</div>
			</section>
		</>
	);
};
export default SingleCardViewer;
