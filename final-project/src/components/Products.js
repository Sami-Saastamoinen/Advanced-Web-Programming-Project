import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";

const Products = (props) => {
	return (
		<ul>
			{props.products.map((product) => (
				<li key={product.id}>
					<h2>{product.title}</h2>
					<p>{product.description}</p>
					<p>${product.price}</p>
					{props.showAddToCart && <AddToCart product={product} />}
					{!props.showAddToCart && (
						<RemoveFromCart product={product} />
					)}
				</li>
			))}
		</ul>
	);
};

export default Products;
