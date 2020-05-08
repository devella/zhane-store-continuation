import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './Dropdown-cart.scss';




const DropdownCart = () => (
        <div className='cart-dropdown' >
            <div className='cart-items' />
            <CustomButton>CHECKOUT</CustomButton>
            
        </div>
    );


export default DropdownCart;