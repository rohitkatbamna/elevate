import React, { useState, useEffect } from "react";
import Cardcom from "../cardcom/cardcom";

function Womencloth() {
	const [cloth, setCloth] = useState([{}]);
	function fetching() {
		console.log("Begin fetching cloth");
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => setCloth(json))
			.catch((error) => console.log("error", error));
	}
	useEffect(fetching, []);
	const wocolth = cloth.filter((nobj) => nobj.category === "women's clothing");
	if (cloth[0].id === undefined) {
		return <h1 className="text-center mt-5 mb-5">Loading Hot Deals</h1>;
	}

	return (
		<div className="hot-deals-all-of-it" style={{ marginTop: "10vw" }}>
			<h1 className="text-center">HOT DEALS BUY NOW</h1>
			<div className="container-fluid">
				<div className="row ms-auto me-auto">
					{wocolth.map((deals) => {
						return (
							<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-5">
								<Cardcom data={deals} id={deals.id} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Womencloth;
