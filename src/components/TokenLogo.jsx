/**
 * TokenLogo component renders a logo image for a token.
 *
 * @param {Object} props - The component props.
 * @param {string} props.logo - The URL of the token logo image.
 * @returns {JSX.Element} The rendered component.
 */

import React from 'react';

const TokenLogo = ({ logo }) => {
    return (
        <div style={{ width: '25px', height: '25px' }}>
            <img src={logo} alt="Token Logo" style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default TokenLogo;