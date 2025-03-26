import React from "react";
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from "@mui/material";

export const Ratings = ( { stimulus, trait, definition, rating, setRating } ) => {
    
    return(
        <div className="container">
            <FormControl>
                <img src={`https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/${stimulus}.png?alt=media&token=e78401f1-1770-4a03-af8b-527659666f7f`} />
                <p>How would you rate this character on the following trait: <strong id='trait-id'> {trait}</strong>?</p>
                <p id="definition-id">({definition})</p>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={rating} onChange={e => setRating(e.target.value)}>
                        <FormLabel id="sidelabel" labelplacement="start">Not at all {trait} </FormLabel>
                        <FormControlLabel value="1" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="4" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Very {trait}</FormLabel>
                    </RadioGroup>
            </FormControl>
        </div>
    )
};