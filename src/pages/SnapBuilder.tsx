import CardGrid from "../components/CardGrid/CardGrid";
interface SnapBuilderProps {
	// myprop: number;
}
const SnapBuilder: React.FC<SnapBuilderProps> = () => {
	return (
        <>
            {/* Deck Viewer */}
            
			<h2>SnapBuilder</h2>
			<CardGrid />
		</>
	);
};
export default SnapBuilder;
