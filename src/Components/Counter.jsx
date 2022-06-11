/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

function Counter({ children }) {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState(`Guest`);

    const handleCount = () => {
        setCount(count + 1);
    };
    const handleUser = () => {
        setUser(prompt(`set your name here`));
    };

    return children(count, handleCount, user, handleUser);
}

export default Counter;
