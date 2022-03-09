import "./App.css";
import Cas from "./components/Cas/cas";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Hotdeals from "./components/hotdeals/hotdeals";
import Navbar from "./components/navbar/navbar";

function App() {
	return (
		<>
			<Navbar />
			<Cas />
			<Features />
			<Hotdeals />
			<Footer />
		</>
	);
}

export default App;
