import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	const showModalHandler = () => {
		setShowModal(true);
	};

	const closeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<div className="common__div home__div">
			<h1>Welcome To The FPP Store!</h1>
			<h1>The #1 Store In The Game</h1>
			<br />
			<br />
			<br />
			<h2>Feel Free to Look Around</h2>
			<button
				className="common__button home__button"
				onClick={() => navigate("/store")}
			>
				Check Out Our Selection
			</button>
			<button
				className="common__button home__button"
				onClick={() => navigate("/cart")}
			>
				Go To Your Shopping Cart
			</button>
			<button
				className="common__button home__button"
				onClick={showModalHandler}
			>
				Admin Page | Plz Don't Use :)
			</button>
			{showModal && (
				<Modal
					onCancel={closeModalHandler}
					onConfirm={() => navigate("/admin")}
				/>
			)}
			{showModal ? <Backdrop onClick={closeModalHandler} /> : null}
		</div>
	);
};

export default HomePage;
