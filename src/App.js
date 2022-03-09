import { Suspense, lazy } from "react";
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
			<Suspense fallback={<h1>FUN LOADING</h1>}>
				<Hotdeals />
			</Suspense>
			<Footer />
		</>
	);
}

export default App;
