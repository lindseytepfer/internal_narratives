import './App.css';
import React, { useState, useEffect } from "react";
import { Instructions } from "./components/instructions";
import { Experiment } from "./components/experiment";
import { Completion } from "./components/completion";

const App = () => {
    const [pageState, setPageState] = useState(0);
    const [stimulus, setStimulus] = useState(null);
    const [version, setVersion] = useState(null);
    const [trait, setTrait] = useState(null);

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

    const movielist = ["physical","stutterer"]
    const versionlist = ["1", "2"]
    
    const traitDict = {'bossy': 'a person who likes giving people orders and wants things their own way.',
            'easygoing': 'a person who is relaxed, tolerant, and not prone to rigid rules or bouts of temper.',
            'nosy': 'a person who is overly curious about other people\'s business.',
            'conscientious': 'a person who does their work or duty thoroughly and responsibly.',
            'rebellious': 'a person who resists authority, control, or convention and wants to have their own way.',
            'humble': 'a person who is modest and does not boast.'}

    useEffect( () => {
        setStimulus(selectStimulus(movielist));
        setVersion(selectStimulus(versionlist))
        setTrait(selectTrait(traitDict))
    }, [])

    console.log(String(stimulus))
    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                case 0:
                    return <Instructions pageEvent={nextPage} />
                case 1:
                    return <Experiment pageEvent={nextPage} stimulus={stimulus} version={version} trait={trait} definition={traitDict[trait]} />; 
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
