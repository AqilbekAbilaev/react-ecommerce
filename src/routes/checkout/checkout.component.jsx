import { useContext } from "react";
import { Outlet } from "react-router-dom";

import CheckOut from "../../component/checkout/checkout.component";

import './checkout.styles.scss';

const Checkout = () => {
    
    return (
        <div>
            <Outlet />
            <CheckOut />
        </div>
    )
}

export default Checkout;

