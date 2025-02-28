
import React from 'react';

const DuckHuntGame = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <iframe
                src="https://www.crazygames.com/embed/duck-hunt"
                title="Duck Hunt Game"
                width="100%"
                height="100%"
                style={{ maxWidth: '800px', maxHeight: '600px', width: '100vw', height: '90vh', border: 'none' }}
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default DuckHuntGame;
