import React, { useState, useEffect } from "react";

export const Completion = ( { pageEvent } ) => {

    return(
        <div className="consent-form">
            <h2>
                Thank you for completing this study.
            </h2>

            <p>
                Click the button below to submit your completion code for this project. <br/><br/>You will be redirected to Cloud Research,
                 and your participation will be registered.
            </p>

            <div>
                <a href="https://connect.cloudresearch.com/participant/project/REPLACE/complete"><button className="advance-button">SUBMIT</button></a>
            </div>
        </div>
    );
};