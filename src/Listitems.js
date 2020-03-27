import React from "react";
import "./Listitems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from 'react-flip-move';




function ListItems(props){

    const items = props.items;
    const listItems = items.map(item =>{

        
    return <div className="list" key={item.key}>
            <p>
            <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdateItem(e.target.value, item.key)}}/>
                <span>
                    <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                </span>       
            
            </p>
            
           
        </div>


    })
    // console.log(items)


    return <div>
    <FlipMove duration={300} easing="ease-in-out">
    {listItems}
    </FlipMove>

</div>;


}





export default ListItems;