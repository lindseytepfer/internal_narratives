import React, { useState } from "react";

export const Instructions = ( {pageEvent, trait, definition} ) => {

    const [part, setPart] = useState(1)

    const handleClick = () => {
        setPart((prev) => prev + 1);
    }

    const advIntro = () => {
        pageEvent();
    }

    return (
    <div className="container">

        {part === 1 &&
        <div>
            <p>In this study, you will watch a short video (approximately 10 to 12 minutes). While you are watching the video, <strong>we will interrupt you  
                 periodically</strong> to ask you about your impressions of the main character. <br/><br/>

                <p>More specifically, we'll ask you to share your impressions by rating them on a scale of 1 to 7 on the following trait: <br/><br/>

                <strong id="trait-id">{trait}</strong><br/><br/>
                {trait} describes {definition}  A score of 1 represents "not at all {trait}" and a score of 7 represents "very {trait}." 
                </p>
                
            </p>
            <button className="advance-button" onClick={handleClick}>got it!</button>

        </div>
        }

        { part === 2 &&
            <div>
                <p>
                    You'll need to ensure that your audio is turned on and plays at a comfortable volume. Please use the video 
                    below to help calibrate your sound for the study:
                </p>

                <video src={"https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/thesoup.mp4?alt=media"} width="640" height="360" controls />
                <p>Press the button below when you are satisfied with the volume and are ready to continue.</p>
                <div>
                    <button className="advance-button" onClick={handleClick}>sounds good!</button>
                </div>
            </div>
        }

        {part === 3 &&
        <div>
            <p>
                Before the video starts, we'll show you a photo of the character we'll be asking you about, 
                and you'll make your first rating of them. Then, as mentioned before, you'll watch the video and will 
                make several repeated ratings of that same character until the video has finished playing. 
            </p>

            <p>Finally, once the video is over, you will be asked to fill out a brief demographic survey.</p>
            
            <p>
                Upon completion, you will be redirected to the Cloud Research page which records your participation, and
                sets it to a 'pending' status, until it is manually approved by the researcher. 
            </p>

            <p><strong>
                PLEASE DO NOT REFRESH YOUR BROWSER OR 
                CLICK THE BACK BUTTON DURING THE EXPERIMENT.
            </strong></p>
 
            <div>
                <p>When you are ready to begin, please press the button below:</p>
                <button className="advance-button" onClick={advIntro}>I'm ready to start!</button>
            </div>
        </div>
        }

        </div>
    );
};