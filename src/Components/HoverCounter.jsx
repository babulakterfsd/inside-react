/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

function HoverCounter({ count, setCount }) {
    return (
        <div style={{ marginLeft: '50px' }}>
            <h1 onMouseOver={setCount}>Hovered {count} times</h1>
        </div>
    );
}

export default HoverCounter;
