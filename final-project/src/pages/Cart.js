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
						image: data[key].image,
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

	var totalPrice = 0;
	for (let i = 0; i < products.length; i++) {
		totalPrice += parseFloat(products[i].price);
	}

	return (
		<div className="cart__div">
			<h1>The Cart Page</h1>
			<section>{content}</section>
			<h2>Total Price: ${totalPrice.toFixed(2)}</h2>
		</div>
	);
};

export default CartPage;
