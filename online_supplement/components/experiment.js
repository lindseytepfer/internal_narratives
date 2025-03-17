import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"

export const Experiment = ( { pageEvent, stimulus, trait, definition } ) => {

    const [position, setPosition] = useState(0);
    const [rating, setRating] = useState(30);

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition((prev) => (prev >= 400 ? 0 : prev + 40));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    // KEYDOWN LISTENER
    // this works, and changes the position of the line on the chart. 
    useEffect(() => {

      const handleKeyPress = (event) => {
        if (event.key === "ArrowUp") {
          setRating((prev) => prev + 10); // Move right
        } else if (event.key === "ArrowDown") {
          setRating((prev) => prev - 20); // Move left
        }
      };

      window.addEventListener("keyup", handleKeyPress);
      window.addEventListener("keydown", handleKeyPress);
    
      return () => {
        window.removeEventListener("keyup", handleKeyPress);
        window.removeEventListener("keydown", handleKeyPress);
      };

    }, []);

    return (
        <>
          <video src={stimulus} width={300} height={200} autoPlay controls='' type="video/mp4" />
          
          <p>a lot</p>

            <div style={{ 
                position: "relative", 
                width: "400px", 
                height: "80px", 
                background: "#f3f4f6", 
                border: "1px solid #ccc", 
                overflow: "hidden" }}>

            <motion.div
                style={{
                    position: "absolute",
                    top: rating,// increasing this makes the line go lower
                    transform: "translateY(-50%)",
                    height: "3px", // thickness
                    background: "blue",
                    width: "200px",
                }}
                initial={{ x: 0 }}
                animate={{ x: position }}
                transition={{ duration: 1, ease: "linear" }}
                />
            </div>

          <p>not so much</p>
          <strong>{trait}</strong> <br/>
          <em>{definition}</em> <br/>
          <p>Your current rating: <strong>{rating}</strong></p>
        </>
    )
}
