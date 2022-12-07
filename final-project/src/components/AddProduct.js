import { useRef } from "react";

const AddProduct = (props) => {
	const titleInputRef = useRef();
	const descriptionInputRef = useRef();
	const priceInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;
		const enteredPrice = priceInputRef.current.value;

		const productData = {
			title: enteredTitle,
			description: enteredDescription,
			price: enteredPrice,
		};

		props.onAddProduct(productData);

		titleInputRef.current.value = "";
		descriptionInputRef.current.value = "";
		priceInputRef.current.value = "";
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor="title">Title</label>
				<input type="text" id="title" ref={titleInputRef} />
			</div>
			<div>
				<label htmlFor="description">Description</label>
				<input type="text" id="description" ref={descriptionInputRef} />
			</div>
			<div>
				<label htmlFor="price">Price</label>
				<input type="number" id="price" ref={priceInputRef} />
			</div>
			<button>Add Product</button>
		</form>
	);
};

export default AddProduct;
