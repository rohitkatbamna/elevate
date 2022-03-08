import "./App.css";
import Cas from "./components/Cas/cas";
import Features from "./components/features/features";
import Hotdeals from "./components/hotdeals/hotdeals";
import Navbar from "./components/navbar/navbar";

function App() {
	return (
		<>
			<Navbar />
			<Cas />
			<Features />
			<Hotdeals />
		</>
	);
}

export default App;
