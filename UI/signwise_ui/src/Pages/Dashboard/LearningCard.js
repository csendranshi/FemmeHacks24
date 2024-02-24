import React from 'react';

function LearningCard({ title, description, imageUrl }) {
    return (
        <div style={{
            width: '300px', // Fixed width for uniformity
            height: '400px', // Fixed height for uniformity
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Distributes space evenly
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            textAlign: 'center',
            backgroundColor: '#fff',
            overflow: 'hidden', // Ensures content doesn't overflow
        }}>
            <img src={imageUrl} alt="Sign Language" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default LearningCard;
