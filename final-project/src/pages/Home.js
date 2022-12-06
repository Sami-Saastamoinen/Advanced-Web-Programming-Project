import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Home Page</h1>
			<button className="home__button" onClick={() => navigate("/store")}>
				Check Out Our Selection
			</button>
			<button className="home__button" onClick={() => navigate("/cart")}>
				Go To Your Cart
			</button>
			<button className="home__button" onClick={() => navigate("/admin")}>
				Admin Page | Plz Don't Use :)
			</button>
		</div>
	);
};

export default HomePage;
