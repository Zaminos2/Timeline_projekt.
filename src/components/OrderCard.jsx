import './orderCard.css'

import OrderDetails from './OrderDetails';

export default function Ordercard(){
    return(
        <div className="cardWrap">
            <div className="cardTitle">
                <h2>Order Status</h2>
            </div>
            <div className="orderDetails">
            <OrderDetails/>
            </div>
        </div>
    )
};