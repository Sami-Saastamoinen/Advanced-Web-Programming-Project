import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
import RemoveProduct from "./RemoveProduct";

const Products = (props) => {
	return (
		<ul className="product__ul">
			{props.products.map((product) => (
				<li className="product__li" key={product.id}>
					<div className="row">
						<div className="column-3">
							<h2>{product.name}</h2>
							<h2>{product.plastic}</h2>
							<h3>{product.description}</h3>
							<h3>
								{product.condition} | ${product.price}
							</h3>
						</div>
						<div className="column-3">
							<img
								src={product.image}
								alt={product.name}
								width="200"
								height="200"
							/>
						</div>
						<div className="column-3">
							{props.showAddToCart && (
								<AddToCart
									product={product}
									fetchProducts={props.fetchProducts}
								/>
							)}
							{props.showRemoveFromCart && (
								<RemoveFromCart
									product={product}
									fetchProducts={props.fetchProducts}
								/>
							)}
							{props.showRemoveProduct && (
								<RemoveProduct
									product={product}
									fetchProducts={props.fetchProducts}
								/>
							)}
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Products;
