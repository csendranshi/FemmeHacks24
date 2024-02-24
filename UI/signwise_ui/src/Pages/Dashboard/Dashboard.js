import React from 'react';
import WelcomeBanner from './WelcomeBanner';
import LearningCard from './LearningCard';

function Dashboard() {
    return (
        <div>
            <WelcomeBanner />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px', // Adds space between the cards
                    maxWidth: '1200px', // Limits maximum width of the container
                }}>
                    <LearningCard
                        title="Alphabets"
                        description="Learn how to sign the alphabet."
                        imageUrl="path/to/your/image2.jpg"
                    />
                    <LearningCard
                        title="Top 25"
                        description="Start with the basics of sign language."
                        imageUrl="path/to/your/image1.jpg"
                    />
                    <LearningCard
                        title="Top 50"
                        description="Start with the basics of sign language."
                        imageUrl="path/to/your/image1.jpg"
                    />

                    {/* More cards can be added here */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
