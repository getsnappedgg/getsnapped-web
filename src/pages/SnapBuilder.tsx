import CardGrid from "../components/CardGrid/CardGrid";
interface SnapBuilderProps {
	// myprop: number;
}
const SnapBuilder: React.FC<SnapBuilderProps> = () => {
	return (
		<>
			{/* Deck Viewer */}
			<section className="ml-16 h-screen w-screen bg-gray-dark">
				<h2 className="text-slate-200">SnapBuilder</h2>
				<CardGrid />
			</section>
		</>
	);
};
export default SnapBuilder;
