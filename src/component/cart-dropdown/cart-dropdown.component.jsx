import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {
        cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
      }
      </div>
        <Button to="/checkout" onClick={goToCheckoutHandler}>
          GO TO CHECKOUT
        </Button>
    </div>
  );
};

export default CartDropdown;
