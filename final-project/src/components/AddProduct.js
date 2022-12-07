import { useRef } from "react";

const AddProduct = (props) => {
	const nameInputRef = useRef();
	const plasticInputRef = useRef();
	const descriptionInputRef = useRef();
	const conditionInputRef = useRef();
	const priceInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredPlastic = plasticInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;
		const enteredCondition = conditionInputRef.current.value;
		const enteredPrice = priceInputRef.current.value;

		const productData = {
			name: enteredName,
			plastic: enteredPlastic,
			description: enteredDescription,
			condition: enteredCondition,
			price: enteredPrice,
		};

		props.onAddProduct(productData);

		nameInputRef.current.value = "";
		plasticInputRef.current.value = "";
		descriptionInputRef.current.value = "";
		conditionInputRef.current.value = "";
		priceInputRef.current.value = "";
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="row">
				<div className="column">
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" ref={nameInputRef} />
				</div>
				<div className="column">
					<label htmlFor="plastic">Plastic: </label>
					<input type="text" id="plastic" ref={plasticInputRef} />
				</div>
			</div>
			<div className="row">
				<div className="column">
					<label htmlFor="description">Description: </label>
					<input
						type="text"
						id="description"
						ref={descriptionInputRef}
					/>
				</div>
				<div className="column">
					<label htmlFor="condition">Condition: </label>
					<input type="text" id="condition" ref={conditionInputRef} />
				</div>
			</div>
			<div className="row">
				<div className="column">
					<label htmlFor="price">Price($): </label>
					<input type="number" id="price" ref={priceInputRef} />
				</div>
				<button className="common__button">Add Product</button>
			</div>
		</form>
	);
};

export default AddProduct;
