import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
	const nonunder = { textDecoration: "none" };
	const pathname = window.location.pathname;
	if (pathname)
		return (
			<div className="navbar-all-of-it shadow sticky-top">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container-fluid">
						<Link to="/" style={nonunder}>
							<p className="navbar-brand fs-1 fw-bold">Fleno</p>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav ms-auto me-auto fs-3 fw-normal">
								<li className="nav-item">
									<Link to="/" style={nonunder}>
										<p
											className={
												pathname === "/" ? "active nav-link" : "nav-link"
											}>
											Home
										</p>
									</Link>
								</li>

								<li className="nav-item">
									<Link to="/electronics" style={nonunder}>
										<p
											className={
												pathname === "/electronics"
													? "active nav-link"
													: "nav-link"
											}>
											Electronics
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/wom" style={nonunder}>
										<p
											className={
												pathname === "/wom" ? "active nav-link" : "nav-link"
											}>
											Women's clothing
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/men" style={nonunder}>
										<p
											className={
												pathname === "/men" ? "active nav-link" : "nav-link"
											}>
											Men's clothing
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/jewelery" style={nonunder}>
										<p
											className={
												pathname === "/jewelery"
													? "active nav-link"
													: "nav-link"
											}>
											Jewelery
										</p>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
}
export default Navbar;
