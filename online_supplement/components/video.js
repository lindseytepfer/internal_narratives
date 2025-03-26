import React, { useRef } from "react";

export const Video = ( { stimulus, version, clip } ) => {
        const videoRef = useRef(null);
      
        // Prevent right-click menu
        const handleContextMenu = (e) => {
          e.preventDefault();
        };
      
        // Optional: Prevent any keyboard controls
        const handleKeyDown = (e) => {
          if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
            e.preventDefault();
          }
        };

    return(
        <div 
            onContextMenu={handleContextMenu}
            onKeyDown={handleKeyDown}
            style={{ position: 'relative' }}
            tabIndex="0" // Needed for key events
        >
            <video id="experiment-video"
              ref={videoRef}
              autoPlay
              playsInline
              disablePictureInPicture
              width="640"
              height="360"
              style={{ 
                marginTop: '5%',
                display: 'block',
                pointerEvents: 'none', // Block all pointer interactions
                userSelect: 'none' // Prevent text selection
              }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={`https://firebasestorage.googleapis.com/v0/b/inarr-99f89.firebasestorage.app/o/${stimulus}-v${version}_clip_${clip}.mp4?alt=media`} type="video/mp4" />
            </video>
            
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10
            }} />
        
        </div>
    );
};