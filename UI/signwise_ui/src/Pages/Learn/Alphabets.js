import React, { useState } from 'react';
import A from '../../Static/Videos/A.mp4';
import B from '../../Static/Videos/B.mp4';
import C from '../../Static/Videos/C.mp4';
import D from '../../Static/Videos/D.mp4';
import E from '../../Static/Videos/E.mp4';
import F from '../../Static/Videos/F.mp4';
import WebcamFeed from "./WebcamFeed";

// Example video URLs for each letter
const videos = {
    'A': A,
    'B': B,
    'C': C,
    'D': D,
    'E': E,
    'F': F
};

function Alphabets() {
    const [currentLetter, setCurrentLetter] = useState('A');

    // Function to go to the next letter
    const handleNext = () => {
        const letters = Object.keys(videos);
        const currentIndex = letters.indexOf(currentLetter);
        const nextIndex = (currentIndex + 1) % letters.length; // Loop back to the start if at the end
        setCurrentLetter(letters[nextIndex]);
    };

    return (
        <div className="video-text-webcam-container">
            <div className="left-container">
                {/* Use the currentLetter as the key to force re-render */}
                <video key={currentLetter} className="video-player" controls autoPlay>
                    <source src={videos[currentLetter]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="letter-container">{currentLetter}</div>
            </div>
            <div className="right-container">
                <WebcamFeed />
                <div>
                    <button className="practice-button">Practice</button>
                    <button className="next-button" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Alphabets;
