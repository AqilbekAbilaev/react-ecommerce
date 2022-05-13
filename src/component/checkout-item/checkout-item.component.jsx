import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckOutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const { addItemToCart, removeItemFromCart, eliminateFromCartItems } =
    useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
  const eliminateCartItemHandler = () => eliminateFromCartItems(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={eliminateCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
