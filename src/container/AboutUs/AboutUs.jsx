import React from 'react';
import {images} from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
    <div className={"app__aboutus app__bg flex__center section__padding"} id={"about"}>
        <div className={"app__aboutus-overlay flex__center"}>
            <img src={images.G} alt={"G"}/>
        </div>

        <div className={"app__aboutus-content flex__center"}>
            <div className={"app__aboutus-content-left"}>
                <h1 className={"headtext__cormorant"}>
                    about us
                </h1>
                <img src={images.spoon} className={"spoon__img"} alt={"about_spoon"}/>
                <p className={"p__opensans"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
                    adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                </p>
                <button type={"button"} className={"custom__button"}>Know more</button>
            </div>
            <div className={"app__aboutus-content-img flex__center"}>
                <img src={images.knife} alt={"about_knife"}/>
            </div>
            <div className={"app__aboutus-content-right"}>
                <h1 className={"headtext__cormorant"}>
                    our history
                </h1>
                <img src={images.spoon} className={"spoon__img"} alt={"about_spoon"}/>
                <p className={"p__opensans"}>
                    Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat
                    habitasse interdum mi aliquam In sed odio nec aliquet.
                </p>
                <button type={"button"} className={"custom__button"}>Know more</button>
            </div>

        </div>

    </div>
);

export default AboutUs;
