import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Electronics from "./pages/Eletronics/electronics";
import Jcompage from "./pages/jewelery/jewelery";
import Landing from "./pages/Landing/landing";
import Men from "./pages/mencloth/Men";

function App() {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} exact />
						<Route path="/electronics" element={<Electronics />} />
						<Route path="/jewelery" element={<Jcompage />} />
						<Route path="/men" element={<Men />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
