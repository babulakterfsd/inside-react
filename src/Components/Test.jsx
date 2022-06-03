import React, { useState } from 'react';

function Test() {
    const [counter, setCounter] = useState(0);
    const handleCounter = () => {
        setCounter(counter + 1);
    };
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <h1>{counter}</h1>
            <button type="button" onClick={() => handleCounter()}>
                Increment
            </button>
        </div>
    );
}

export default Test;
