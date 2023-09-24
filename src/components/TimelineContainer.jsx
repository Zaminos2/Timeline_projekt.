import ProductTimeLine from "./ProductTimeLine";
import {Input,Button} from 'antd'
import './timelineContainer.css'

export default function TimelineContainer(){
    const{TextArea} = Input

    return(
        <div className="timelineContainer">
            <div className="contentContainer">
                <ProductTimeLine/>
            </div>
            <div className="contentContainer">
                <TextArea rows={9} placeholder="Write a review"/>
                <Button type="primary">Post Rewiew</Button>
            </div>
        </div>
    )
}