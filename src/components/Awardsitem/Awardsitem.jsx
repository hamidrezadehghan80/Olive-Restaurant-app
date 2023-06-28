import React from "react";
import "./Awardsitem.css"

const Awardsitem = ({imageUrl, title, sub_title}) => {
    return(
        <div className={"app__Awardsitem"}>
            <div className={"app__Awardsitem-img"}>
                <img src={imageUrl} alt={`awards ${title}`}/>
            </div>
            <div className={"app__Awardsitem-info"}>
                <h3 className={"headtext__cormorant"}>{title}</h3>
                <p className={"p__opensans"}>
                    {sub_title}
                </p>
            </div>
        </div>
    )
}

export default Awardsitem