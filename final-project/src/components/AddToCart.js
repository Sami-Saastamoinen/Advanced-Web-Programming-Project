const AddToCart = ({ product }) => {
	const addToCartHandler = async () => {
		await fetch(
			"https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
			{
				method: "POST",
				body: JSON.stringify(product),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		window.location.reload();
	};

	return (
		<button className="common__button" onClick={addToCartHandler}>
			Add to Cart
		</button>
	);
};

export default AddToCart;
