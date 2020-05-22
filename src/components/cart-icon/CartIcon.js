import React from 'react';
import { connect } from 'react-redux';
import  { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount  } from '../../redux/cart/CartSelector';
import cart from '../../logoo/cart.png'
import './CartIcon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <img className='shopping-icon' src={cart} alt='pic'/>
    <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);