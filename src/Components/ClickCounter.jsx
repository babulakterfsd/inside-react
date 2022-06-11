/* eslint-disable jsx-a11y/mouse-events-have-key-events */

function ClickCounter({ count, setCount }) {
    return (
        <div>
            <button type="button" onClick={setCount}>
                Clicked {count} times
            </button>
        </div>
    );
}

export default ClickCounter;
