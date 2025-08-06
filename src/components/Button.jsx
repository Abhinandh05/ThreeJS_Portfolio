import React from 'react';

const Button = ({ name, isBeam = false, containerClass = '' }) => {
    return (
        <div className={`w-full flex justify-center ${containerClass}`}>
            <button className="btn">
                {isBeam && (
                    <span className="relative flex h-3 w-3">
            <span className="btn-ping" />
            <span className="btn-ping_dot" />
          </span>
                )}
                {name}
            </button>
        </div>
    );
};

export default Button;
