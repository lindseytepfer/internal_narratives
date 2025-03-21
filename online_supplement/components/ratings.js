import React, { useState, useEffect } from "react";
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from "@mui/material";

export const Ratings = ( { trait, definition, rating, setRating } ) => {
    
    return(
        <>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">How would you rate this character on the following trait? </FormLabel>
                <p>(photo)</p>
                <p>{trait}</p>
                <p>{definition}</p>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={rating} onChange={e => setRating(e.target.value)}>
                        <FormLabel id="sidelabel" labelplacement="start">Very Negative </FormLabel>
                        <FormControlLabel value="1" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="4" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Very Positive</FormLabel>
                    </RadioGroup>
            </FormControl>
        </>
    )
};