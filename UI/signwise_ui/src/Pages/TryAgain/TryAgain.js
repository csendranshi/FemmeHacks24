import React from 'react';
import './TryAgainScreen.css'; // Import CSS file for styling

const TryAgain= ({ onTryAgain }) => {
  return (
    <div className="try-again-container">
      <div className="try-again-content">
        <h1>You're not quite there yet.</h1>
        <p>Don't worry, you can try again and will be a master in no time!</p>
        <button onClick={onTryAgain}>Try Again</button>
      </div>
    </div>
  );
};

export default TryAgain;
