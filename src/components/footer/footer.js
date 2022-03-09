import React from "react";

function Footer() {
	return (
		<>
			<hr style={{ marginTop: "5vw" }} />
			<div className="container-fluid">
				<div className="row" style={{ marginLeft: "5vw", marginRight: "5vw" }}>
					<div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-12">
						<h1 className="fw-bold">Fleno.</h1>
						<h5>© 2022 Flone. All Rights Reserved</h5>
					</div>
					<div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-12">
						<h4 className="fw-bold">ABOUT US</h4>
						<h6>About us</h6>
						<h6>Store location</h6>
						<h6>Contact</h6>
						<h6>Orders tracking</h6>
					</div>
					<div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-12">
						<h4 className="fw-bold">USEFUL LINKS</h4>
						<h6>Returns</h6>
						<h6>Support Policy</h6>
						<h6>Size guide</h6>
						<h6>FAQs</h6>
					</div>
					<div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-12">
						<h4 className="fw-bold">FOLLOW US</h4>
						<h6>Facebook</h6>
						<h6>Twitter</h6>
						<h6>Instagram</h6>
						<h6>Youtube</h6>
					</div>
					<div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-12">
						<h4 className="fw-bold">SUBSCRIBE</h4>
						<h6>
							Get E-mail updates about our latest shop and special offers.
						</h6>
						<div class="form-floating mb-3">
							<input
								type="email"
								className="form-control"
								id="floatingInput"
								placeholder="name@example.com"
							/>
							<label for="floatingInput">Email address</label>
							<button className="btn btn-primary mt-3">SUBSCRIBE</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Footer;
