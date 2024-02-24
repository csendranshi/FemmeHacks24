import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';

const WebcamFeed = () => {
    const webcamRef = useRef(null);
    const modelRef = useRef(null);

    // Load your model
    // useEffect(() => {
    //     const loadModel = async () => {
    //         modelRef.current = await tf.loadLayersModel('/path/to/your/model.json');
    //         // Initialize or warm-up the model if necessary
    //     };
    //     loadModel();
    // }, []);

    // Predict gesture
    // const predictGesture = async () => {
    //     if (webcamRef.current && modelRef.current) {
    //         const video = webcamRef.current.video;
    //         const videoWidth = webcamRef.current.video.videoWidth;
    //         const videoHeight = webcamRef.current.video.videoHeight;
    //
    //         // Preprocess the video frame from webcam and run prediction
    //         // This depends on how your model expects the input
    //         // Example: const prediction = await modelRef.current.predict(preprocessedInput);
    //     }
    // };

    // Setup prediction interval
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         predictGesture();
    //     }, 500); // Run prediction every 500 ms
    //     return () => clearInterval(interval);
    // }, []);

    return <Webcam ref={webcamRef} style={{ width: '70%' , height: '80%'}} />;
};

export default WebcamFeed;
