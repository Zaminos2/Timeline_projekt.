import {orderStatus,dividerStyle} from '../utils';
import {Divider,Tag} from 'antd'
export default function OrderDetails(){
    return(
        <>
        <div className="dataWraper">
            <Divider orientation='left'style={dividerStyle}>Order Place Date</Divider>
            <p className='detailText'>{orderStatus.placeDate}</p>
        </div>
        <div className="dataWraper">
            <Divider orientation='left'style={dividerStyle} >Order Status</Divider>
            <Tag color='orange' className='detailText'>{orderStatus.tag}</Tag>
        </div>
        <div className="dataWraper">
            <Divider orientation='left'style={dividerStyle} >Delivery Option</Divider>
            <p className='detailText'>{orderStatus.delivery}</p>
        </div>
        <div className="dataWraper">
            <Divider orientation='left'style={dividerStyle}>Payment</Divider>
            <p className='detailText'>{orderStatus.payment}</p>
        </div>
        <div className="dataWraper">
            <Divider orientation='left'style={dividerStyle}>Order Amount</Divider>
            <p className='detailText'>{orderStatus.orderAmount}</p>
        </div>
        </>
    )
}