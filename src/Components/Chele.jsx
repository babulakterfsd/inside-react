import React from 'react';
import useAuth from '../Hooks/useAuth';

function Chele() {
    const { count, countDispatch } = useAuth();
    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>The count is {count} now </h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button
                    style={{ marginRight: '20px' }}
                    type="button"
                    onClick={() => countDispatch('increment')}
                >
                    increment
                </button>
                <button type="button" onClick={() => countDispatch('decrement')}>
                    decrement
                </button>
            </div>
        </div>
    );
}

export default Chele;
