import CartConstant from './cart.constant';

export const toggleCartHidden = () => ({
    type: CartConstant.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartConstant.ADD_ITEM,
    payload: item
})