import React, { useState, useEffect } from "react";
import Cardcom from "../cardcom/cardcom";
import "./hotdeals.css";

function Hotdeals() {
	const [hotdeals, setHotdeals] = useState([{}]);
	function fetching() {
		console.log("begin fetching");
		fetch("https://fakestoreapi.com/products?limit=5")
			.then((res) => res.json())
			.then((json) => setHotdeals(json))
			.catch((error) => console.log("error", error));
	}
	useEffect(fetching, []);

	if (hotdeals[0].id === undefined) {
		return <h1 className="text-center mt-5 mb-5">Loading Hot Deals</h1>;
	}
	return (
		<div className="hot-deals-all-of-it" style={{ marginTop: "10vw" }}>
			<h1 className="text-center">HOT DEALS BUY NOW</h1>
			<div className="container-fluid">
				<div className="row ms-auto me-auto">
					{hotdeals.map((deals) => {
						return (
							<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-5">
								<Cardcom data={deals} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Hotdeals;
