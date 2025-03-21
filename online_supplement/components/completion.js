import React from "react";

export const Completion = ( { pageEvent } ) => {
    

    //cloud research paramters
    const queryParameters = new URLSearchParams(window.location.search)
    const participantID = queryParameters.get("participantId")
    const assignmentID = queryParameters.get("assignmentId")
    const projectID = queryParameters.get("projectId")

    // const dataCollectionRef = collection(db, "responses")

    // const sendData = async () => {
    //     try {
    //         await addDoc(dataCollectionRef, {
    //             userID: subID,
    //             connectID: participantID,
    //             assignmentID: assignmentID,
    //             projectID: projectID,
    //             movieID: sequence[progress],
    //             q1: q1,
    //             q2: q2,
    //             q3: q3,
    //             q4: q4,
    //             q5: q5,
    //             q6: q6,
    //             q7: q7,
    //             q8: q8,
    //     });
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }





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