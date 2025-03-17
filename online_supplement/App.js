import './App.css';
import React, { useState, useEffect } from "react";
import { Instructions } from "./components/instructions";
import { Experiment } from "./components/experiment";
import { Completion } from "./components/completion";

const App = () => {
    const [pageState, setPageState] = useState(0);
    const [stimulus, setStimulus] = useState(null);
    const [trait, setTrait] = useState(null);
    const [definition, setDefinition] = useState(null);

    const nextPage = () => setPageState((prev) => prev + 1);

    function selectStimulus(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function selectTrait(dict) {
        const keys = Object.keys(dict);
        const randomIndex = Math.floor(Math.random() * keys.length);
        const randomKey = keys[randomIndex];
        return randomKey;
      }

    const mediaList = [
        "https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/physical-v1.mp4?alt=media&token=b9caedcf-2af5-403e-ab9e-ca1c0a265f2a",
        "https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/physical-v2.mp4?alt=media&token=525c1e1e-dc09-427e-9227-4adf277446b0", 
        "https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/stutterer-v1.mp4?alt=media&token=4d41fd24-2c8b-4636-9fb4-a0f341866b51",   
        "https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/stutterer-v2.mp4?alt=media&token=ec3831a9-ebdf-4a41-b96e-386e7298f4a4"
        ]
    
    const traitDict = {'bossy': 'a person who likes giving people orders and wants things their own way.',
            'easygoing': 'a person who is relaxed, tolerant, and not prone to rigid rules or bouts of temper.',
            'nosy': 'a person who is overly curious about other people\'s business.',
            'conscientious': 'a person who does their work or duty thoroughly and responsibly.',
            'rebellious': 'a person who resists authority, control, or convention and wants to have their own way.',
            'humble': 'a person who is modest and does not boast.'}

    useEffect( () => {
        setStimulus(selectStimulus(mediaList));
        setTrait(selectTrait(traitDict))
    }, [])

    console.log(definition)

    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                  case 0:
                    return <Experiment pageEvent={nextPage} stimulus={stimulus} trait={trait} definition={traitDict[trait]} />; 
                    //     return <Instructions pageEvent={nextPage}/>;
                    // case 1:
                    //     return <Experiment pageEvent={nextPage}}/>;                       
                    // case 2:
                    //     return <Completion pageEvent={nextPage} />;
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default App;
