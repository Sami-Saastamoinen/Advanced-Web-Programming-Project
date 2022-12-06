import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
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
						<Link to="/admin">Admin Page</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
