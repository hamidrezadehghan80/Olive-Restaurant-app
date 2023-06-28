import React from 'react';
import {images, data} from "../../constants";
import {SubHeading, MenuItem} from "../../components";
import './SpecialMenu.css';

const SpecialMenu = () => (
    <div className={"app__specialmenu flex__center section__padding"} id={"menu"}>
        <div className={"app__specialmenu-title"}>
            <SubHeading title={"Menu that fits you palatte"}/>
            <h1 className={"headtext__cormorant"}>Today's Special</h1>
        </div>
        <div className={"app__specialmenu-menu"}>
            <div className={"app__specialmenu-menu-left flex__center"}>
                <p className={"app__specialmenu-menu-header"}>
                    Wine & Beer
                </p>
                <div className={"app__specialmenu-menu-menuitems"}>
                    {
                        data.wines.map((wine, index)=>
                                <MenuItem item={wine} key={wine.title + index}/>
                        )
                    }
                </div>
            </div>
            <div className={"app__specialmenu-menu-img"}>
                <img src={images.menu} alt={"menu_image"}/>
            </div>
            <div className={"app__specialmenu-menu-right flex__center"}>
                <p className={"app__specialmenu-menu-header"}>
                    Cocktails
                </p>
                <div className={"app__specialmenu-menu-menuitems"}>
                    {
                        data.cocktails.map((cocktail, index)=>
                                <MenuItem item={cocktail} key={cocktail.title + index}/>
                         )
                    }
                </div>
            </div>
        </div>
        <div style={{marginTop : "2rem"}}>
            <button type={"button"} className={"custom__button"}>
                View More
            </button>
        </div>
    </div>
);

export default SpecialMenu;
