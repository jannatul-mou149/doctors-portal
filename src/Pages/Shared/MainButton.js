import React from 'react';

const MainButton = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">{children}</button>
        </div>
    );
};

export default MainButton;