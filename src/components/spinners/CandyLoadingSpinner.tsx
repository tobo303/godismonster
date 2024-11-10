import React from 'react';
import { PacmanLoader } from 'react-spinners';

const CandyLoadingSpinner: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <PacmanLoader color="#36d7b7" />
        </div>
    );
};

export default CandyLoadingSpinner;