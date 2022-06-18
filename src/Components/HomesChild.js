import React, { memo, useEffect, useRef } from 'react';

function HomesChild({ test, handleTest }) {
    console.log('HomesChild component rendered');

    const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.addEventListener('focus', () => {
    //         console.log(`hello world`);
    //     });
    // }, []);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div style={{ marginTop: '50px' }}>
            <p>This is {test} to test useMemo</p>
            <button type="button" onClick={handleTest}>
                set text
            </button>
            <form style={{ marginTop: '20px' }}>
                <input ref={inputRef} type="text" style={{ outline: 'none' }} />
            </form>
        </div>
    );
}

export default memo(HomesChild);
