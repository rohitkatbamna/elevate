import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
	const nonunder = { textDecoration: "none" };
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
									<p className="nav-link active" aria-current="page">
										Home
									</p>
								</Link>
							</li>
							<li className="nav-item dropdown">
								<p
									className="nav-link dropdown-toggle"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Shop
								</p>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink">
									<li>
										<Link to="/electronics" style={nonunder}>
											<p className="dropdown-item">Electronics</p>
										</Link>
									</li>
									<li>
										<Link to="/jewelery" style={nonunder}>
											<p className="dropdown-item">Jewelery</p>
										</Link>
									</li>
									<li>
										<Link to="/men" style={nonunder}>
											<p className="dropdown-item">Men's clothing</p>
										</Link>
									</li>
									<li>
										<Link to="/wom" style={nonunder}>
											<p className="dropdown-item">Women's clothing</p>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link to="/" style={nonunder}>
									<p className="nav-link" aria-current="page">
										Support
									</p>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" style={nonunder}>
									<p className="nav-link " aria-current="page">
										About Us
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
