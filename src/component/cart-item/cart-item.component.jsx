import {CartItemContainer, ItemDetails} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name}/>
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="q">{quantity} x {price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
