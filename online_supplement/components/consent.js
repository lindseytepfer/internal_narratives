import React from "react";

export const Consent = ( { pageEvent } ) => {
    
    return (
        <>
            <h1><u>CONSENT TO TAKE PART IN RESEARCH</u></h1>
            <h2>Dartmouth College</h2>
            <h3>Study Title: Online behavioral studies of social cognition</h3>
            <h4>Principal Investigator: Mark Allen Thornton</h4>
            
            <p className="body-text"> 
                <strong>You are being asked to take part in a <u>research study</u>.  Taking part in research is <u>voluntary</u>. </strong>
                <br/><br/>

                <strong><u>Study Summary:</u></strong><br/>
                This study aims to understand how people perceive and predict other people and social situations. The
                risk of participating in this study is minimal, no greater than what you would experience in the course of 
                everyday internet use for an equivalent period of time. Your participation in this study is completely
                voluntary. You may choose not to participate. You may withdraw at any time during the study without
                penalty by simply closing this tab or window of your web browser. 
                <br/><br/>

                <strong><u>What is the purpose of this study?</u></strong><br/>
                The purpose of the study is to understand how people learn about and make sense of other people's traits
                (e.g., extraversion), mental states (thoughts and feelings), actions (running, eating, talking etc.), and 
                social situations (e.g., dinner with friends). We also hope to learn how these processes apply to 
                nonhuman objects and entities (such as computer avatars, algorithms, pets and graphs).
                <br/><br/>

                <strong><u>Will you benefit from taking part in this study?</u></strong><br/>
                The only benefit you will receive from participating is the monetary payment described below.
                <br/><br/>

                <strong><u>What does this study involve?</u></strong><br/> 
                Your participation in this study will last approximately 30 minutes. You will begin by reading the study instructions. 
                You will then make judgments about trait, mental states, actions, and/or situations, or nonsocial object or entities 
                (such as computer avatars, algorithms, pets and graphs). The stimuli may be presented through a variety of different 
                media, including text, images, videos, and audio. You will make your responses using your keyboard/mouse or 
                touchscreen. At the end of the study, you will be asked to complete a brief questionnaire about yourself, relating 
                information such as your demographics, personality traits, mental state, and attitudes. 
                <br/><br/>

                <strong><u>What are the risks involved with being enrolled in this study?</u></strong><br/> 
                The risk of participating in this study is minimal. All stimuli you will be presented with are selected to 
                avoid any sensitive content, such as violence. You will not be asked to provide any sensitive information 
                about yourself either. However, any online interaction carries some risk of being accesssed. 
                <br/><br/>

                <strong><u>Will my deidentified data be shared with the public for scientific purposes?</u></strong><br/>
                Yes, for scientific purposes, the data collected in this project will be shared on Open Science Framework 
                and freely accessible to the public. We will not record identifying information from you, such as names, 
                contact information, or IP addresses. We may temporarily retain your Microsoft CloudResearch ID to ensure 
                that we can pay you if you encounter a technical issue. However, this information will be deleted after 
                data collection is complete, and will not be shared. 
                <br/><br/>

                <strong><u>Will you be paid to take part in this study?</u></strong><br/>
                Yes, you will receive $3.75. This payment will be made electronically via the online platform 
                you are using to complete the study.
                <br/><br/>

                <strong><u>Whom should you call with questions about this study?</u></strong><br/>
                The leader of the research team for this study is Mark Thornton, who can be reached at 
                mark.a.thornton@dartmouth.edu if you have questions, concerns, complaints or if you would like 
                to talk to the research team, if you think the research team has harmed you, or if you wish to 
                withdraw from the study.
            </p>

            <h2>CONSENT</h2>  
            <p>By pressing the button below, you agree that:</p>
            <p>
                1. You agree to take part in this research.<br/>
                2. You feel like you understand what you are agreeing to.<br/>
                3. You know you are free to withdrawal at any time.<br/>
            </p>
            <div>
                <button className="advance-button" onClick={pageEvent}>consent</button> 
            </div>
        </>
    )
}