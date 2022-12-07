import Products from "../components/Products";
import { useState, useEffect } from "react";

const CartPage = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const response = await fetch(
			"https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
		);
		const data = await response.json();
		const loadedProducts = [];
		for (const key in data) {
			loadedProducts.push({
				id: key,
				name: data[key].name,
				plastic: data[key].plastic,
				description: data[key].description,
				image: data[key].image,
				condition: data[key].condition,
				price: data[key].price,
			});
		}
		setProducts(loadedProducts);
	};

	useEffect(() => {
		fetchProducts();
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

	var totalPrice = 0;
	for (let i = 0; i < products.length; i++) {
		totalPrice += parseFloat(products[i].price);
	}

	const buyHandler = async () => {
		await fetch(
			`https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/cart.json`,
			{
				method: "DELETE",
			}
		);
		window.location.reload();
	};

	return (
		<div className="common__div">
			<h1>The Cart Page</h1>
			<section>{content}</section>
			<h2>Total Price: ${totalPrice.toFixed(2)}</h2>
			<button className="common__button" onClick={buyHandler}>
				Buy These Items
			</button>
		</div>
	);
};

export default CartPage;
