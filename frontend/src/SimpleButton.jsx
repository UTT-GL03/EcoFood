import React from 'react';

function SimpleButton({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children || 'Cliquez ici'}
        </button>
    );
}

export default SimpleButton;