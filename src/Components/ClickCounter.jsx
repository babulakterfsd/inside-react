/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import withHoc from './withHOC';

function ClickCounter() {
    const insideClickCounter = ({ count, clickHandler }) => (
        <div style={{ marginLeft: '50px' }}>
            <button type="button" onClick={clickHandler}>
                clicked {count} times
            </button>
        </div>
    );

    return withHoc(insideClickCounter);
}

export default ClickCounter;
