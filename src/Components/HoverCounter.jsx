/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import withHoc from './withHOC';

function HoverCounter() {
    const insideHoverCounter = ({ count, clickHandler }) => (
        <div style={{ marginLeft: '50px' }}>
            <h1 onMouseOut={clickHandler}>Hovered {count} times</h1>
        </div>
    );

    return withHoc(insideHoverCounter);
}

export default HoverCounter;
