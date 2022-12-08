const RemoveFromCart = ({ product, fetchProducts }) => {
	const removeFromCartHandler = async () => {
		await fetch(
			`https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/cart/${product.id}.json`,
			{
				method: "DELETE",
			}
		);

		fetchProducts();
	};

	return (
		<button className="common__button" onClick={removeFromCartHandler}>
			Remove from Cart
		</button>
	);
};

export default RemoveFromCart;
