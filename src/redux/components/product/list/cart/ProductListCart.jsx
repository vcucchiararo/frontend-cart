import Product from "../../Product";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <div className="cart-container">
    {articles.map((product) => (
      <Product product={product} key={product.id} />
    ))}
  </div>
);

const ProductListCart = connect(mapStateToProps)(ConnectedList);

export default ProductListCart;
