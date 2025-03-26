import './App.css';
import React, { useState, useEffect } from "react";
import { Consent } from './components/consent';
import { Instructions } from "./components/instructions";
import { Experiment } from "./components/experiment";
import { Demographics } from "./components/demographics";
import { Completion } from "./components/completion";

const App = () => {
    const [pageState, setPageState] = useState(0);
    const [stimulus, setStimulus] = useState(null);
    const [version, setVersion] = useState(null);
    const [trait, setTrait] = useState(null);

    const [data, setData] = useState([]);

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
    
    const traitDict = {'Bossy': 'a person who likes giving people orders and wants things their own way.',
            'Easygoing': 'a person who is relaxed, tolerant, and not prone to rigid rules or bouts of temper.',
            'Nosy': 'a person who is overly curious about other people\'s business.',
            'Conscientious': 'a person who does their work or duty thoroughly and responsibly.',
            'Rebellious': 'a person who resists authority, control, or convention and wants to have their own way.',
            'Humble': ' person who is modest and does not boast.'}

    useEffect( () => {
        setStimulus(selectStimulus(movielist));
        setVersion(selectStimulus(versionlist))
        setTrait(selectTrait(traitDict))
    }, [])

    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                case 0:
                    return <Consent pageEvent={nextPage} />
                case 1:
                    return <Instructions pageEvent={nextPage} trait={trait} definition={traitDict[trait]} />
                case 2:
                    return <Experiment pageEvent={nextPage} stimulus={stimulus} version={version} trait={trait} definition={traitDict[trait]} data={data} setData={setData}/>; 
                case 3:
                    return <Demographics pageEvent={nextPage} data={data} stimulus={stimulus} version={version} trait={trait} />
                case 4:
                    return <Completion pageEvent={nextPage} />;
                default:
                    return null;
                }
            })()}
        </div>
    );
};

export default App;
