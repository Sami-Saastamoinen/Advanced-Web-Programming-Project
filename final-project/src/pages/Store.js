import Products from "../components/Products";
import { useState, useEffect } from "react";

const StorePage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(
			"https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/products.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const loadedProducts = [];
				for (const key in data) {
					loadedProducts.push({
						id: key,
						title: data[key].title,
						description: data[key].description,
						price: data[key].price,
					});
				}
				setProducts(loadedProducts);
			});
	}, []);

	let content;
	if (products.length === 0) {
		content = <p>No products</p>;
	} else {
		content = <Products products={products} showAddToCart={true} />;
	}

	return (
		<div className="store__div">
			<h1>The Store Page</h1>
			<section>{content}</section>
		</div>
	);
};

export default StorePage;
