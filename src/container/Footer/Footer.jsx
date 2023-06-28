import React from 'react';
import {images} from "../../constants";
import './Footer.css';
import {FooterOverlay, Newsletter} from "../../components";
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi";

const Footer = () => (
    <div className={"section__padding app__footer"}>
        <FooterOverlay/>
        <Newsletter/>
        <div className={"app__footer-content"}>
            <div className={"app__footer-content-side"}>
                <h3>
                    Contact Us
                </h3>
                <div className={"app__footer-content-side-content"}>
                    <p className={"p__opensans"}>
                        9 W 53rd St, New York, NY 10019, USA
                    </p>
                    <p className={"p__opensans"}>
                        +1 212-344-1230
                    </p>
                    <p className={"p__opensans"}>
                        +1 212-555-1230
                    </p>
                </div>
            </div>
            <div className={"app__footer-content-center"}>
                <img src={images.olive} alt={"footer logo"}/>
                <p className={"p__opensans"}>
                    "The best way to find yourself is to lose yourself in the service of others."
                </p>
                <img src={images.spoon} alt={"footer spoon"}/>
                <div className={"app__footer-content-center-social flex__center"}>
                    <FiFacebook/>
                    <FiTwitter/>
                    <FiInstagram/>
                </div>
            </div>
            <div className={"app__footer-content-side"}>
                <h3>
                    Working Hours
                </h3>
                <div className={"app__footer-content-side-content"}>
                    <p className={"p__opensans"}>
                        Monday-Friday:
                    </p>
                    <p className={"p__opensans"}>
                        08:00 am - 12:00 am
                    </p>
                </div>
                <div className={"app__footer-content-slide-content"}>
                    <p className={"p__opensans"}>
                        Saturday-Sunday:
                    </p>
                    <p className={"p__opensans"}>
                        07:00 am - 11:00 pm
                    </p>
                </div>
            </div>
        </div>
        <p className={"p__opensans"} style={{marginTop : "5rem"}}>
            2023 Olive. All Rights reserved.
        </p>
    </div>
);

export default Footer;
