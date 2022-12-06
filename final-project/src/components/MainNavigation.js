import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./MainNavigation.css";

const MainNavigation = () => {
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	const showModalHandler = () => {
		setShowModal(true);
	};

	const closeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<header className="main-navigation">
			<div className="main-navigation__logo">
				<Link to="/">Flying Plastic Plates</Link>
			</div>
			<nav className="main-navigation__items">
				<ul>
					<li>
						<Link to="/store">Store</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<li>
						<button
							className="main-navigation__button"
							onClick={showModalHandler}
						>
							Admin Page
						</button>
						{showModal && (
							<Modal
								onCancel={closeModalHandler}
								onConfirm={() => {
									navigate("/admin");
									closeModalHandler();
								}}
							/>
						)}
						{showModal ? (
							<Backdrop onClick={closeModalHandler} />
						) : null}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
