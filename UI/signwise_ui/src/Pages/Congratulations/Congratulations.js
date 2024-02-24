import React from 'react';
import Confetti from 'react-confetti';

function CongratulationsPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h2>Congratulations!</h2>
            <p>You did it - you are a super star and are now ready to use sign language!</p>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
            />
        </div>
    );
}

export default CongratulationsPage;
