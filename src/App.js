import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import { fetchProducts } from './actions/actions';
import './App.css';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={ProductsPage} exact />
      <Route path="/cart" component={CartPage} exact />
    </Switch>
  </BrowserRouter>
  );
  }
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps
)(App);

