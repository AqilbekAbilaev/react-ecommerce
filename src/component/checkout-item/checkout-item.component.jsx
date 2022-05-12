import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    
    const { cartItems, addItemToCart, removeItemFromCart, eliminateFromCartItems} = useContext(CartContext);

    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
    const eliminateCartItemHandler = () => eliminateFromCartItems(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemFromCartHandler}>&#10094;</div>
                 <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={eliminateCartItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;