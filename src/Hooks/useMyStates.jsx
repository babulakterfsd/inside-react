import { useEffect, useReducer } from 'react';

const initialCounterState = 0;
const initialFetchState = {
    loading: true,
    post: [],
    err: '',
};

const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                post: action.result,
                err: '',
            };
        case 'error':
            return {
                loading: false,
                post: {},
                err: `Something error happened while fetching data`,
            };
        default:
            return state;
    }
};

const counterReducer = (state, action) => {
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
    const [count, countDispatch] = useReducer(counterReducer, initialCounterState);
    const [fetchData, fetchDispatch] = useReducer(fetchReducer, initialFetchState);

    useEffect(() => {
        fetch(`https://cryptic-sea-29383.herokuapp.com/products`)
            .then((res) => res.json())
            .then((data) => {
                fetchDispatch({ type: 'success', result: data });
            })
            .catch(() => {
                fetchDispatch({ type: 'error' });
            });
    }, []);

    return { count, countDispatch, fetchData, fetchDispatch };
};

export default useMyStates;
