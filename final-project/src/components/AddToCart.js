const AddToCart = ({ product }) => {
	const addToCartHandler = () => {
		fetch(
			"https://product-list-84477-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
			{
				method: "POST",
				body: JSON.stringify(product),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	};

	return <button onClick={addToCartHandler}>Add to Cart</button>;
};

export default AddToCart;
