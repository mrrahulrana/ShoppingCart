export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODCUT_FROM_CART';

export const fetchProducts = () => {
  return dispatch => {
      fetch('https://private-3efa8-products123.apiary-mock.com/products')
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch({
            type: FETCH_ALL_PRODUCTS,
            payload: res.products
          });
      })
  }
}

export const addProductToCart = product => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
    }, 700);
  };
};

export const removeProductFromCart = productId => {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: REMOVE_PRODUCT_FROM_CART,
          payload: productId
        });
      }, 700);
    };
  };