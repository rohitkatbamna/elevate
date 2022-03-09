import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Electronics from "./pages/Eletronics/electronics";
import Landing from "./pages/Landing/landing";

function App() {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} exact />
						<Route path="/electronics" element={<Electronics />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
