import CartConstant from './cart.constant';

export const toggleCartHidden = () => ({
    type: CartConstant.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartConstant.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartConstant.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item =>({ 
    type: CartConstant.CLEAR_ITEM_FROM_CART,
    payload: item
});

