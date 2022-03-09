import Cas from "../../components/Cas/cas";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";
import Hotdeals from "../../components/hotdeals/hotdeals";
import Navbar from "../../components/navbar/navbar";

function Landing() {
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

export default Landing;
