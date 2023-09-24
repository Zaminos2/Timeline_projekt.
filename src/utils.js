import {v4} from 'uuid'

export const TimelineList = [
    {
        orderStatus:"Order Delivered",
        date:'2023-2-25',
        contrnt:'Order Delivered',
        color:'blue'
    },
    {
        orderStatus:"Order Shipping",
        date:'2023-2-23',
        contrnt:'Sent a notification to the client by e-mail.',
        color:'gray'
    },
    {
        orderStatus:"Order Processing",
        date:'2023-2-22',
        contrnt:'Payment transaction [method: Credit Card, type: sale, amount: $22,054, status: Processing]',
        color:'gray'
    },
    {
        orderStatus:"Order Placed",
        date:'2023-2-21',
        contrnt:'The order was validated.<br/>The order was placed.',
        color:'gray'
    },
]
export const tabsArray = [
    {id:v4(),text:'Details'},
    {id:v4(),text:'Invoice'},
    {id:v4(),text:'Status'},
]
export const orderStatus = {
    placeDate:'11th May, 2023',
    tag:'Processing',
    delivery:'DHL',
    payment:'Credit Card',
    orderAmount:'$567.99'
}
export const dividerStyle = {
    color: 'rgba(0, 0, 0, 0.88)',
    fontSize: '16px',
    fontFamily: 'SF Pro Text',
    fontWeight: 600,
    lineHeight: '24px',
    wordWrap: 'break-word',
  };