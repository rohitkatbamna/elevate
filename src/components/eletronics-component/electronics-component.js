import React, { useState, useEffect } from "react";

function Electronicscom() {
	const [electronics, setElectronics] = useState([{}]);
	function fetching() {
		console.log("Begin fetching Electronics");
		fetch("https://fakestoreapi.com/products/category/electronics")
			.then((res) => res.json())
			.then((json) => setElectronics(json))
			.catch((error) => console.log("error", error));
	}
	useEffect(fetching, []);
	if (electronics[0].id === undefined) {
		return <h1 className="text-center mt-5 mb-5">Loading Hot Deals</h1>;
	}
	return (
		<div className="hot-deals-all-of-it" style={{ marginTop: "10vw" }}>
			<h1 className="text-center">HOT DEALS BUY NOW</h1>
			<div className="container-fluid">
				<div className="row ms-auto me-auto">
					{electronics.map((deals) => {
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
										<h4 className="card-text mt-4 text-decoration-line-through">
											$ {deals.price}
										</h4>
										<h4 className="card-text mt-4">
											$ {deals.price * (1 / 2)}
											<span className="ms-2 fw-bold" style={{ color: "red" }}>
												SPECIAL PRICE
											</span>
											<br />
											<button type="button" className="btn btn-danger mt-3">
												Buy Now
											</button>
										</h4>
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
export default Electronicscom;
