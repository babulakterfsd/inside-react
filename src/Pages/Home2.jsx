// --------------------------------- useReducer multiple local state object pattern --------------------------------- //

// import { useReducer } from 'react';

// const initialState = {
//     counter: 0,
//     counter1: 0,
// };
// const myReducer = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return { ...state, counter: state.counter + action.value };
//         case 'decrement':
//             return { ...state, counter: state.counter - action.value };
//         case 'increment1':
//             return { ...state, counter1: state.counter1 + action.value };
//         case 'decrement1':
//             return { ...state, counter1: state.counter1 - action.value };
//         default:
//             return { counter: state.counter };
//     }
// };

// function Home2() {
//     const [count, dispatch] = useReducer(myReducer, initialState);

//     return (
//         <div
//             style={{
//                 minHeight: '100vh',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 flexDirection: 'column',
//             }}
//         >
//             <h1 style={{ marginBottom: '30px' }}>The counter is {count.counter} now</h1>
//             <h1 style={{ marginBottom: '30px', color: 'green' }}>
//                 The counter1 is {count.counter1} now
//             </h1>
//             <div
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginBottom: '30px',
//                 }}
//             >
//                 <button
//                     type="button"
//                     style={{ marginRight: '30px' }}
//                     onClick={() => dispatch({ type: 'increment', value: 1 })}
//                 >
//                     increment by 1
//                 </button>
//                 <button
//                     type="button"
//                     style={{ marginRight: '30px' }}
//                     onClick={() => dispatch({ type: 'decrement', value: 1 })}
//                 >
//                     decrement by 1
//                 </button>
//             </div>

//             <div
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                 }}
//             >
//                 <button
//                     type="button"
//                     style={{ marginRight: '30px' }}
//                     onClick={() => dispatch({ type: 'increment1', value: 1 })}
//                 >
//                     increment1 by 1
//                 </button>
//                 <button
//                     type="button"
//                     style={{ marginRight: '30px' }}
//                     onClick={() => dispatch({ type: 'decrement1', value: 1 })}
//                 >
//                     decrement1 by 1
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Home2;

// --------------------------------- useReducer multiple local state multiple reducer pattern --------------------------------- //

import { useReducer } from 'react';

const initialState = 0;

const myReducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

function Home2() {
    const [count, dispatch] = useReducer(myReducer, initialState);
    const [count1, dispatch1] = useReducer(myReducer, initialState);

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
            <h1 style={{ marginBottom: '30px' }}>The counter is {count} now</h1>
            <h1 style={{ marginBottom: '30px', color: 'green' }}>The counter1 is {count1} now</h1>
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
                    onClick={() => dispatch('increment')}
                >
                    increment by 1
                </button>
                <button
                    type="button"
                    style={{ marginRight: '30px' }}
                    onClick={() => dispatch('decrement')}
                >
                    decrement by 1
                </button>
                <button
                    type="button"
                    style={{ marginRight: '30px' }}
                    onClick={() => dispatch1('increment')}
                >
                    increment by 1
                </button>
                <button
                    type="button"
                    style={{ marginRight: '30px' }}
                    onClick={() => dispatch1('decrement')}
                >
                    decrement by 1
                </button>
            </div>
        </div>
    );
}

export default Home2;
