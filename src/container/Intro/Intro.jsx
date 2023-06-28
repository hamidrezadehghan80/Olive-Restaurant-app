import React, {useRef, useState} from 'react';
import {BsPlayCircle, BsPauseCircle} from "react-icons/bs";
import {meal} from "../../constants"
import './Intro.css';

const Intro = () => {

    const [video_play, setVideo_play] = useState(false);
    const video_ref = useRef();
    const handle_click = (e) => {
    setVideo_play((prev) => !prev);

        if (video_play){
          video_ref.current.pause();
        }else {
          video_ref.current.play();
        }
    }

  return(
      <div className={"app__intro-video"}>
        <video
            src={meal}
            ref={video_ref}
            type="video/mp4"
            controls={false}
            loop
            muted
        />
        <div className={"app__intro-video-overlay flex__center"}>
            <div
                className={"app__intro-video-overlay-btn"}
                onClick={handle_click}
            >
                {
                    video_play ? <BsPauseCircle/> : <BsPlayCircle/>
                }
            </div>
        </div>
      </div>
  );
};

export default Intro;
