import Products from "../components/Products";
import { useState, useEffect } from "react";

const StorePage = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const response = await fetch(
			"https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/products.json"
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
		content = <p>No products</p>;
	} else {
		content = (
			<Products
				products={products}
				fetchProducts={fetchProducts}
				showAddToCart={true}
				showRemoveFromCart={false}
				showRemoveProduct={false}
			/>
		);
	}

	return (
		<div className="common__div">
			<h1>The Store Page</h1>
			<section>{content}</section>
		</div>
	);
};

export default StorePage;
