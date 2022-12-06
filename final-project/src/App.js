import HomePage from "./pages/Home";
import StorePage from "./pages/Store";
import CartPage from "./pages/Cart";
import AdminPage from "./pages/Admin";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

const App = () => {
	return (
		<div>
			<MainNavigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/store" element={<StorePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/admin" element={<AdminPage />} />
			</Routes>
		</div>
	);
};

export default App;
