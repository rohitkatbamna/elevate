import React from "react";
import "./cardcom.css";

function Cardcom({ data }) {
	return (
		<div className="card hot-data-add-hover-here" style={{ width: "18rem" }}>
			<img
				src={data.image}
				className="card-img-top"
				alt={data.title}
				height="300px"
				width="300px"
			/>
			<div className="card-body">
				<h5 className="card-title">{data.title}</h5>
				<h4 className="card-text mt-4 text-decoration-line-through">
					$ {data.price}
				</h4>
				<h4 className="card-text mt-4">
					$ {data.price * (1 / 2)}
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
	);
}
export default Cardcom;
