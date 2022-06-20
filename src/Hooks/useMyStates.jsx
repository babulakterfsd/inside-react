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

const useMyStates = () => {
    const [count, dispatch] = useReducer(myReducer, initialState);
    return { count, dispatch };
};

export default useMyStates;
