import React, { useState, useEffect, useRef} from "react";
import { Ratings } from "./ratings";

export const Experiment = ( { pageEvent, stimulus, version, trait, definition, data, setData } ) => {
    
    const durations = {
        "physical": [148000,2000,27000,10000,59000,8000,19000,6000,19000,7000,68000,37000,22000,5000,4000,6000,42000,3000,7000,7000,5000,1000,68000,2000,16000],
        "stutterer": [28000,3000,133000,11000,2000,20000,146000,20000,25000,16000,21000,6000,11000,1000,10000,14000,41000,6000,32000,14000,40000,60000,3000,32000],
    }

    const [clip, setClip] = useState(0);
    const [playVideo, setPlayVideo] = useState(false); 
    const [rating, setRating] = useState(0);

    useEffect(()=>{
        if (rating !== 0){
            setData([...data, rating]);
            setPlayVideo(true);
        }

    }, [rating])

    useEffect(()=>{
        if (playVideo) {

            const timer = setInterval( () => {
                setPlayVideo(false);
            }, durations[stimulus][clip]);
    
            return () => {
                clearInterval(timer);
                setClip((prev) => prev + 1);
                setRating(0);
            }

    }
    }, [playVideo])

    useEffect(()=>{
        if (clip === 25){
            pageEvent();
        }

    }, [clip])


    console.log("clip:", clip)

    return (
        <div>
            { !playVideo &&
                <>
                    <Ratings stimulus={stimulus} trait={trait} definition={definition} rating={rating} setRating={setRating} />
                    <p id="progress-id">progress: {clip+1}/{25}</p>
                </>
            }

            { playVideo &&
                <>
                    <video 
                        src={`https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/${stimulus}-v${version}_clip_${clip}.mp4?alt=media`} 
                        autoPlay 
                        controls=''> Unable to load video. </video>
                </>
            }

        </div>
    )
}