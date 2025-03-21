import React, { useState, useEffect, useRef} from "react";
import { Ratings } from "./ratings";

export const Experiment = ( { stimulus, version, trait, definition } ) => {
    
    const durations = {
        "physical": [148000,2000,27000,10000,59000,8000,19000,6000,19000,7000,68000,37000,22000,5000,4000,6000,42000,3000,7000,7000,5000,1000,68000,2000,16000],
        "stutterer": [28000,3000,133000,11000,2000,20000,146000,20000,25000,16000,21000,6000,11000,1000,10000,14000,41000,6000,32000,14000,40000,60000,3000,32000],
    }

    const [clip, setClip] = useState(0);
    const [playVideo, setPlayVideo] = useState(false); 
    const [rating, setRating] = useState(0);
    const [data, setData] = useState([]);

    useEffect(()=>{
        if (clip < 25){

            if (rating !== 0){
                setData([...data, rating]);
            }

            setClip((prev) => prev + 1);
            setPlayVideo(true);
    
            const timer = setInterval( () => {
                setPlayVideo(false);
            }, 5000); //durations[stimulus][clip]
    
            return () => {
                clearInterval(timer);
                setRating(0);
            }
        }
    }, [rating])

    console.log(durations[stimulus][clip])

    return (
        <div>
            { !playVideo &&
                <>
                    <Ratings trait={trait} definition={definition} rating={rating} setRating={setRating} />
                </>
            }

            { playVideo &&
                <>
                    <video src={`https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/${stimulus}-v${version}_clip_${clip}.mp4?alt=media&token=672387bd-9d5b-4813-99ef-afaba3492b94`} autoPlay />
                </>
            }

        </div>
    )
}