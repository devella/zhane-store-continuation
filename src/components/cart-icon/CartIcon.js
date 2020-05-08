import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import cart from '../../logoo/cart.png'
import './CartIcon.scss'

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
    <img className='shopping-icon' src={cart} alt=''/>
    <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);