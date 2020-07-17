import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import { addProductToCart } from '../actions/actions';
import './Products.css';

class ProductsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.props.cartItemCount} />
        <main className="products">
          <ul>
            {this.props.products.map(product => (
              <li key={product.productID}>
                <table>
                  <tr>
                    <td><img src={product.image} className="img-responsive"/></td>
                  </tr>
                  <tr>
                    <td>
                    <div>
                  <strong>{product.name}</strong> - ${product.unitPrice}
                  {product.description}
                  </div>
                    </td>
                  </tr>
                </table>
                <div>
                  <button
                    onClick={this.props.addProductToCart.bind(this, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: product => dispatch(addProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);