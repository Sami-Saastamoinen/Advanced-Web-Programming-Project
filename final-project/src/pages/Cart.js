import Products from "../components/Products";
import { useState, useEffect } from "react";

const CartPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(
			"https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const loadedProducts = [];
				for (const key in data) {
					loadedProducts.push({
						id: key,
						name: data[key].name,
						plastic: data[key].plastic,
						description: data[key].description,
						condition: data[key].condition,
						price: data[key].price,
					});
				}
				setProducts(loadedProducts);
			});
	}, []);

	let content;
	if (products.length === 0) {
		content = <p>No products added to cart</p>;
	} else {
		content = (
			<Products
				products={products}
				showAddToCart={false}
				showRemoveFromCart={true}
				showRemoveProduct={false}
			/>
		);
	}

	return (
		<div className="cart__div">
			<h1>The Cart Page</h1>
			<section>{content}</section>
		</div>
	);
};

export default CartPage;
