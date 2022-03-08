import React from "react";
import truckimg from "../../assests/truck-solid.svg";
import quesimg from "../../assests/circle-question-solid.svg";
import moneyimg from "../../assests/money-bill-solid.svg";
import disimg from "../../assests/percent-solid.svg";
import "./features.css";
function Features() {
	return (
		<div className="features-all-of-it features-add-margin-here">
			<div className="container-fluid ">
				<div className="row text-center">
					<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
						<p className="fs-2 fw-bold">Free Shipping</p>
						<img src={truckimg} alt="truck" height="100" width="100" />
					</div>
					<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
						<p className="fs-2 fw-bold">24H Support</p>
						<img src={quesimg} alt="support" height="100" width="100" />
					</div>
					<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
						<p className="fs-2 fw-bold">Money Return</p>
						<img src={moneyimg} alt="money" height="100" width="100" />
					</div>
					<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
						<p className="fs-2 fw-bold">Discount High</p>
						<img src={disimg} alt="money" height="100" width="100" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Features;
