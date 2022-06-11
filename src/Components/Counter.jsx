/* eslint-disable no-unused-vars */
import { useState } from 'react';

function Counter({ children }) {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    };

    return children(count, handleCount);
}

export default Counter;
