import React, { useState, useEffect } from "react";
import "./hotdeals.css";

function Hotdeals() {
	const [hotdeals, setHotdeals] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=5")
			.then((res) => res.json())
			.then((json) => setHotdeals(json));
		console.log(hotdeals);
	}, []);

	if (!hotdeals) {
		return <h1>Loading Hot Deals</h1>;
	}
	return (
		<div className="hot-deals-all-of-it" style={{ marginTop: "10vw" }}>
			<h1 className="text-center">HOT DEALS BUY NOW</h1>
			<div className="container-fluid">
				<div className="row ms-auto me-auto">
					{hotdeals.map((deals) => {
						return (
							<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-5">
								<div
									className="card hot-deals-add-hover-here"
									style={{ width: "18rem" }}>
									<img
										src={deals.image}
										className="card-img-top"
										alt={deals.title}
										height="300px"
										width="300px"
									/>
									<div className="card-body">
										<h5 className="card-title">{deals.title}</h5>
										<h4 className="card-text">$ {deals.price}</h4>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Hotdeals;
