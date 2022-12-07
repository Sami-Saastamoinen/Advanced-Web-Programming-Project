import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import { useState, useEffect } from "react";

const AdminPage = () => {
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

	const addProductHandler = async (productData) => {
		const response = await fetch(
			"https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/products.json",
			{
				method: "POST",
				body: JSON.stringify(productData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		console.log(data);

		fetchProducts();
	};

	let content;
	if (products.length === 0) {
		content = <p>No products</p>;
	} else {
		content = (
			<Products
				products={products}
				showAddToCart={false}
				showRemoveFromCart={false}
				showRemoveProduct={true}
			/>
		);
	}

	return (
		<div className="admin__div">
			<h1>The Admin Page</h1>
			<section>
				<AddProduct onAddProduct={addProductHandler} />
			</section>
			<section>{content}</section>
		</div>
	);
};

export default AdminPage;
