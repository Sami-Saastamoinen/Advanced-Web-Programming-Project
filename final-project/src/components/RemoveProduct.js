const RemoveProduct = ({ product, fetchProducts }) => {
	const removeProductHandler = async () => {
		await fetch(
			`https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/products/${product.id}.json`,
			{
				method: "DELETE",
			}
		);

		fetchProducts();
	};

	return (
		<button className="common__button" onClick={removeProductHandler}>
			Remove Product
		</button>
	);
};

export default RemoveProduct;
