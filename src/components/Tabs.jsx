import { useState } from "react";
import{tabsArray} from '../utils';
import './tabs.css'

export default function Tabs(){
    const [tabActiv,setTabActiv] = useState(null);
    if(tabActiv===null&&tabsArray.length>0){
        setTabActiv(tabsArray[0].id)
    }
    function handleActiv(id){
        setTabActiv(id)
    }
    return (
    <div className="navContainer">
    {tabsArray.map((el)=>(
        <div key={el.id} 
        className={tabActiv===el.id?'activTab':'navTab'}
        onClick={()=>{handleActiv(el.id)}}>{el.text}</div>
    ))}
    </div>)
       
    
}