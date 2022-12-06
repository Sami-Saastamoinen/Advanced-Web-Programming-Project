const Modal = (props) => {
	return (
		<div className="modal">
			<h2>Do you promise that you are an admin no cap on god on god??</h2>
			<button
				className="modal__button modal__button--alt"
				onClick={props.onCancel}
			>
				No I'm Not, Sorry :(
			</button>
			<button className="modal__button" onClick={props.onConfirm}>
				Yep :)
			</button>
		</div>
	);
};

export default Modal;
