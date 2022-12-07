const Products = (props) => {
	return (
		<ul>
			{props.products.map((product) => (
				<li key={product.id}>
					<h2>{product.title}</h2>
					<p>{product.description}</p>
					<p>${product.price}</p>
				</li>
			))}
		</ul>
	);
};

export default Products;
