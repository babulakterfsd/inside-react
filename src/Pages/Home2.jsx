import { useReducer } from 'react';

const initialState = {
    counter: 0,
};
const myReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + action.value };
        case 'decrement':
            return { counter: state.counter - action.value };
        default:
            return { counter: state.counter };
    }
};

function Home2() {
    const [count, dispatch] = useReducer(myReducer, initialState);

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <h1 style={{ marginBottom: '30px' }}>The count is {count.counter} now</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px',
                }}
            >
                <button
                    type="button"
                    style={{ marginRight: '30px' }}
                    onClick={() => dispatch({ type: 'increment', value: 1 })}
                >
                    increment by 1
                </button>
                <button
                    type="button"
                    style={{ marginRight: '30px' }}
                    onClick={() => dispatch({ type: 'increment', value: 5 })}
                >
                    increment by 5
                </button>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <button
                    type="button"
                    onClick={() => dispatch({ type: 'decrement', value: 1 })}
                    style={{ marginRight: '30px', marginLeft: '-30px' }}
                >
                    decrement by 1
                </button>
                <button type="button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>
                    decrement by 5
                </button>
            </div>
        </div>
    );
}

export default Home2;
