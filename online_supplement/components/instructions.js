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
            <p>In this study, you will watch a short video (approximately 10 minutes). As you're watching the video, we will interrupt you  
                <strong> twenty-five times</strong> to ask you about your impressions of the main character. <br/><br/>

                <p>More specifically, we'll ask you to share your impressions by rating them on a scale of 1 to 7 on the following trait: <br/><br/>

                <strong id="trait-id">{trait}</strong><br/><br/>
                which describes {definition}  A score of 1 represents "not at all {trait}" and a score of 7 represents "very {trait}." 
                </p>
                

                Before the video starts, we'll show you a photo of the character we'll be asking you about, 
                and you'll make your first rating of them.

            </p>
            <button className="advance-button" onClick={handleClick}>got it!</button>

        </div>
        }

        {part === 2 &&
        <div>
            <p>
                Once you've finished watching the video and have completed rating the main character several times, 
                you will be asked to fill out a brief demographic survey.</p>
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