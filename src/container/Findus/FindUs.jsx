import React from 'react';
import {images} from "../../constants";
import {SubHeading} from "../../components";
import "./FindUs.css"

const FindUs = () => (
    <div className={"app__bg section__padding app__wrapper"} id={"contact"}>
        <div className={"app__wrapper_info app__findus-info"}>
            <SubHeading title={"Contact"}/>
            <h1 className={"headtext__cormorant"} style={{marginBottom : "3rem"}}>
                Find Us
            </h1>
            <p className={"p__opensans"}>
                Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
            </p>
            <h3 className={"headtext__cormorant"}>
                Opening Hours
            </h3>
            <p className={"p__opensans"}>
                Mon - Fri: 10:00 am - 02:00 am
            </p>
            <p className={"p__opensans"}>
                Sat - Sun: 10:00 am - 03:00 am
            </p>
            <button type={"button"} className={"custom__button"} style={{margin : "2rem 0rem"}}>
                Visit Us
            </button>
        </div>
        <div className={"app__wrapper_img"}>
            <img src={images.findus} alt={"find_us"}/>
        </div>
    </div>
);

export default FindUs;
