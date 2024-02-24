import React, { useState, useEffect, useRef } from 'react';

function Quiz() {
    const alphabet = 'ABCDEFGHIJKKLMNOPQRSTUVWXYZ';
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [letters, setLetters] = useState([]);
    const videoRef = useRef(null);

    useEffect(() => {
        // Generate initial letter for the first question
        generateLetter();
    }, []);

    useEffect(() => {
        // Access webcam when component mounts
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch(error => console.error('Error accessing webcam:', error));
        }
    }, []);

    const generateLetter = () => {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomLetter = alphabet[randomIndex];
        setLetters([randomLetter]);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < 4) {
            setCurrentQuestion(currentQuestion + 1);
            generateLetter();
        } else {
            alert('You have completed the quiz!');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <h2>Quiz</h2>
            <div style={{ width: '70%', height: '70%' }}>
                <video ref={videoRef} autoPlay style={{ width: '100%', height: '100%' }}></video>
            </div>
            <div style={{ marginTop: '20px', fontSize: '3rem', color: 'blue', fontWeight: 'bold' }}>
                <p>{letters[0]}</p>
            </div>
            {currentQuestion < 4 && (
                <button style={{ marginTop: '20px' }} onClick={handleNextQuestion}>Next Question</button>
            )}
        </div>
    );
}

export default Quiz;
