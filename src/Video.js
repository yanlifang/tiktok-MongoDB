import React, { useRef, useState } from 'react';
import "./Video.css";

function Video(){

    const [playing, setPlaying ] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () =>{
        //if video is playing
        //stop it
        if(playing)
        {
            videoRef.current.pause();
            setPlaying(false);
        }
        else
        {
            videoRef.current.play();
            setPlaying(true);

        }

        //otherwise if it is not playing 
        //play it

    }

    return (
        <div className="video">
            <video 
                onClick={handleVideoPress}
                className="video_player"
                loop
                ref={videoRef}
                src="" >

            </video>
            <h1>test video </h1>
        </div>
    );

}


export default Video;