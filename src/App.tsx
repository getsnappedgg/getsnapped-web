import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { SnapBuilder } from "./pages";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";

function App() {
	return (
		<>
			<div className="flex flex-row relative w-screen h-screen">
				<Router>
					<section className="">
						<Header />

						<Routes>
							<Route path="/" element={<h2>Home</h2>} />
							<Route path="/builder" element={<SnapBuilder />} />
							<Route path="/bravery" element={<h2>Snap Bravery</h2>} />
							<Route path="/eye" element={<h2>Snap Eye</h2>} />
							<Route path="/decks" element={<h2>Deck Lists</h2>} />
							<Route path="/about" element={<h2>About</h2>} />
							<Route path="/archetype" element={<h2>Snap Archetype</h2>} />
							<Route path="/login" element={<LoginUser />} />
							<Route path="/register" element={<RegisterUser />} />
						</Routes>
					</section>
				</Router>
			</div>
		</>
	);
}

export default App;
