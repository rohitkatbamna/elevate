import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<div className="navbar-all-of-it shadow sticky-top">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<a className="navbar-brand fs-1 fw-bold" href="#">
						Fleno
					</a>
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
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Shop
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink">
									<li>
										<a className="dropdown-item" href="#">
											Electronics
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Jewelery
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Men's clothing
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Women's clothing
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Support
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
