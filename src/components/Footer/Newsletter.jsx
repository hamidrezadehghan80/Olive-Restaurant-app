import React from 'react';
import {SubHeading} from "../index";
import './Newsletter.css';
import {images} from "../../constants";

const Newsletter = () => (
    <div className={"app__newsletter"}>
        <div className={"app__newsletter-header"}>
            <p className={"p__cormorant"}>Newsletter</p>
            <img src={images.spoon} className={"spoon__img"} alt={"spoon"}/>
        </div>
        <h1 className={"headtext__cormorant"}>Subscribe To Our Newsletter</h1>
        <p className={"p__opensans"}>
            And never miss latest Updates!
        </p>
        <div className={"app__newsletter-inputbox"}>
            <input type={"text"} placeholder={"Enter your email address"}/>
            <button type={"button"} className={"custom__button"}>
                Subscribe
            </button>
        </div>
    </div>
);

export default Newsletter;
