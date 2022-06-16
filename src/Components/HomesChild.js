import React, { memo } from 'react';

function HomesChild({ test, handleTest }) {
    console.log('HomesChild component rendered');
    return (
        <div style={{ marginTop: '50px' }}>
            <p>This is {test} to test useMemo</p>
            <button type="button" onClick={handleTest}>
                set text
            </button>
        </div>
    );
}

export default memo(HomesChild);
