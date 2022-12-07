import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
import RemoveProduct from "./RemoveProduct";

const Products = (props) => {
	return (
		<ul>
			{props.products.map((product) => (
				<li key={product.id}>
					<h2>{product.name}</h2>
					<p>{product.plastic}</p>
					<p>{product.description}</p>
					<p>{product.condition}</p>
					<p>${product.price}</p>
					{props.showAddToCart && <AddToCart product={product} />}
					{props.showRemoveFromCart && (
						<RemoveFromCart product={product} />
					)}
					{props.showRemoveProduct && (
						<RemoveProduct product={product} />
					)}
				</li>
			))}
		</ul>
	);
};

export default Products;
