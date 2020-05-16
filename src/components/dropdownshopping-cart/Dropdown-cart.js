import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { toggleCartHidden} from '../../redux/cart/cart.action'
import { selectCartItems } from '../../redux/cart/CartSelector'
import './Dropdown-cart.scss';

const DropdownCart = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      ) : (
        <span className='empty-message'>Your shopping cart is empty</span>
        )}
    </div>
    <CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()); }}>
    CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(DropdownCart));