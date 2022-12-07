import AddProduct from "../components/AddProduct";

const AdminPage = () => {
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
	};

	return (
		<div className="admin__div">
			<h1>The Admin Page</h1>
			<section>
				<AddProduct onAddProduct={addProductHandler} />
			</section>
		</div>
	);
};

export default AdminPage;
