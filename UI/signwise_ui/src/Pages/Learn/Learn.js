import React from 'react';
import WebcamFeed from "./WebcamFeed";
import './Learn.css';
import videoSrc from '../../Static/Videos/A.mp4';
import WelcomeBanner from "../Dashboard/WelcomeBanner";

export default function Learn() {
    return (
        <div className="video-text-webcam-container">
            <div className="left-container">
                <video className="video-player" controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="letter-container">B</div> {/* Letter container */}
            </div>
            <div className="right-container">
                <WebcamFeed />
                <div>
                <button className="practice-button">Practice</button>
                    <button className="next-button">Next</button>
                </div>
            </div>
        </div>
    );
}
