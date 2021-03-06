import React from "react";
import cas1img from "../../assests/cas1.jpg";
import cas2img from "../../assests/cas2.jpg";
import cas3img from "../../assests/cas3.jpg";

function Cas() {
	const style = { height: "600px" };
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src={cas1img}
						className="d-block w-100"
						alt="Hair"
						style={style}
					/>
				</div>
				<div className="carousel-item">
					<img
						src={cas2img}
						className="d-block w-100"
						alt="hat"
						style={style}
					/>
				</div>
				<div className="carousel-item">
					<img
						src={cas3img}
						className="d-block w-100"
						alt="top"
						style={style}
					/>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
export default Cas;
