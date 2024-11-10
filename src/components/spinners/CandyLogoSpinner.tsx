import React from 'react';
import { IMAGE_LOGO_URL } from '../../scripts/candyConfig';

// Was a pacman spinner, but it bugged out eventually...
const CandyLogoSpinner: React.FC = () => {
    return (
        <div style={{ position: 'relative', top: '-0.90rem', height: '4px', paddingLeft: '1rem', paddingRight: '0.1rem' }}>
            <img src={IMAGE_LOGO_URL} />
        </div>
    );
};

export default CandyLogoSpinner;