import React from 'react';

import './MenuItem.css';

const MenuItem = ({item}) => (
    <div className={"app__menuitem"}>
        <div className={"app__menuitem-head"}>
            <div className={"app__menuitem-name"}>
                <p className={"p__cormorant"} style={{color : "var(--color-golden)"}}>{item.title}</p>
            </div>
            <div className={"app__menuitem-dash"}/>
            <div className={"app__menuitem-price"}>
                <p className={"p__cormorant"}>{item.price}</p>
            </div>
        </div>
        <div className={"app__menuitem-tag"}>
            <p className={"p__opensans"} style={{color : "var(--color-grey)"}}>
                {item.tags}
            </p>
        </div>
    </div>
);

export default MenuItem;
