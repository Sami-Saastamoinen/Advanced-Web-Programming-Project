import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className="home__div">
			<h1>Welcome To The FPP Store!</h1>
			<h1>The #1 Store In The Game</h1>
			<br />
			<br />
			<br />
			<h2>Feel Free to Look Around</h2>
			<button className="home__button" onClick={() => navigate("/store")}>
				Check Out Our Selection
			</button>
			<button className="home__button" onClick={() => navigate("/cart")}>
				Go To Your Shopping Cart
			</button>
			<button className="home__button" onClick={() => navigate("/admin")}>
				Admin Page | Plz Don't Use :)
			</button>
		</div>
	);
};

export default HomePage;
