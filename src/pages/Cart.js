import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import { removeProductFromCart } from '../actions/actions';
import './Cart.css';

class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.props.cartItemCount} />
        <main className="cart">
          {this.props.cartItems.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.props.cartItems.map(cartItem => (
              <li key={cartItem.productID}>
                <div>
                  <strong>{cartItem.name}</strong> - ${cartItem.unitPrice} (
                  {cartItem.quantity})
                  [Item left in stock: {cartItem.unitsInStock}]
                </div>
                <div>
                  <button
                    onClick={this.props.removeProductFromCart.bind(
                      this,
                      cartItem.productID
                    )}
                  >
                    Remove from Cart
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
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: id => dispatch(removeProductFromCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);