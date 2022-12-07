import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
import RemoveProduct from "./RemoveProduct";

const Products = (props) => {
	return (
		<ul>
			{props.products.map((product) => (
				<li key={product.id}>
					<div className="row">
						<div className="column">
							<h2>{product.name}</h2>
							<h2>{product.plastic}</h2>
							<h3>{product.description}</h3>
							<h3>
								{product.condition} | ${product.price}
							</h3>
						</div>
						<div className="column">
							{props.showAddToCart && (
								<AddToCart product={product} />
							)}
							{props.showRemoveFromCart && (
								<RemoveFromCart product={product} />
							)}
							{props.showRemoveProduct && (
								<RemoveProduct product={product} />
							)}
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Products;
