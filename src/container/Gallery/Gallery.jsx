import React, {useRef} from 'react';
import {images} from "../../constants";
import {SubHeading} from "../../components";
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import './Gallery.css';

const Gallery = () => {

    const images_list = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

    const slider_ref = useRef(null);

    const scroll = (direction) => {
        if(direction === "left") {
            slider_ref.current.scrollLeft -= 300;
        }else {
            slider_ref.current.scrollLeft += 300;
        }
    };

    return (
        <div className={"app__gallery flex__center"}>
            <div className={"app__gallery-info"}>
                <SubHeading title={"Instagram"}/>
                <h1 className={"headtext__cormorant"}>Photo Gallery</h1>
                <p className={"p__opensans"} style={{margin : "1rem 0rem"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
                </p>
                <button type={"button"} className={"custom__button"} style={{marginTop : "1rem"}}>
                    View More
                </button>
            </div>
            <div className={"app__gallery-slider"}>
                <div ref={slider_ref} className={"app__gallery-slider-container"}>
                    {
                        images_list.map((image, index)=>{
                            return (
                                <div className={"app__gallery-image-card flex__center"} key={`image card ${index}`} >
                                    <img src={image} alt={"gallery image"}/>
                                    <BsInstagram className={"app__gallery-image-card-icon"}/>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={"app__gallery-slider-arrow"}>
                    <BsArrowLeftShort className={"app__gallery-slider-icon"} onClick={() => {scroll("left");}}/>
                    <BsArrowRightShort className={"app__gallery-slider-icon"} onClick={() => {scroll("right");}}/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
