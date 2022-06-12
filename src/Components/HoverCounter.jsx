/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Counter from './withHOC';

function HoverCounter() {
    const insideHoverCounter = ({ count, clickHandler }) => (
        <div style={{ marginLeft: '50px' }}>
            <h1 onMouseOut={clickHandler}>Hovered {count} times</h1>
        </div>
    );

    return Counter(insideHoverCounter);
}

export default HoverCounter;
