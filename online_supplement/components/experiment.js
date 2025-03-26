import React, { useState, useEffect, useRef} from "react";
import { Ratings } from "./ratings";
import { Video } from "./video";

export const Experiment = ( { pageEvent, stimulus, version, trait, definition, data, setData } ) => {
    
    const durations = {
        "physical": [149000,4000,27000,12000,58000,11000,19000,8000,18000,10000,67000,40000,23000,7000,4000,8000,42000,5000,7000,9000,5000,3000,68000,7000,14000],
        "stutterer": [29000,5000,133000,13000,2000,22000,146000,22000,24000,19000,21000,7000,11000,4000,9000,18000,40000,8000,32000,16000,39000,63000,3000,34000,45000],
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
        if (clip === 26){
            pageEvent();
        }

    }, [clip])

    console.log("clip:", clip)

    return (
        <div>
            <progress value={clip+1} max={25}/>
            { !playVideo &&
                <>
                    <Ratings stimulus={stimulus} trait={trait} definition={definition} rating={rating} setRating={setRating} />
                </>
            }

            { playVideo &&
                <> 
                    <Video stimulus={stimulus} version={version} clip={clip} />
                </>
            }

        </div>
    )
}