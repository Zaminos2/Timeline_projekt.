import Ordercard from "./OrderCard";
import Tabs from "./Tabs";
import TimelineContainer from "./TimelineContainer";
import './orderDetails3.css'


export default function OrderDetails3(){
    return(
        <div className="mainContainer">
            <Tabs/>
            <Ordercard/>
            <TimelineContainer/>
        </div>
    )
}