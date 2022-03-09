import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/landing";

function App() {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} exact />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
