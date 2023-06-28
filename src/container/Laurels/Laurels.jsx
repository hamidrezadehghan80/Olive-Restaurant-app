import React from 'react';
import {images, data} from "../../constants"
import './Laurels.css';
import {SubHeading} from "../../components";
import Awardsitem from "../../components/Awardsitem/Awardsitem";

const Laurels = () => (
    <div className={"app__bg app__wrapper section__padding"} id={"awards"}>
        <div className={"app__wrapper_info"}>
            <SubHeading title={"Awards & recognition"}/>
            <h1 className={"headtext__cormorant"}>Our Laurels</h1>
            <div className={"app__awards_list"}>
                {
                    data.awards.map(({imgUrl, title, subtitle}, index) =>
                        <Awardsitem title={title} imageUrl={imgUrl} sub_title={subtitle} key={index}/>
                    )
                }
            </div>
        </div>
        <div className={"app__wrapper_img"}>
            <img src={images.laurels} alt={"laurels"}/>
        </div>
    </div>
);

export default Laurels;
