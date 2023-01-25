import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { SnapBuilder } from "./pages";

function App() {
	return (
		<>
			<Router>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<h2>Home</h2>} />
						<Route path="/builder" element={<SnapBuilder />} />
						<Route path="/bravery" element={<h2>Snap Bravery</h2>} />
						<Route path="/eye" element={<h2>Snap Eye</h2>} />
						<Route path="/decks" element={<h2>Deck Lists</h2>} />
						<Route path="/about" element={<h2>About</h2>} />
						<Route path="/archetype" element={<h2>Snap Archetype</h2>} />
						{/* <Route path="/login" element={<Login />} /> */}
						{/* <Route path="/register" element={<Register />} /> */}
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
