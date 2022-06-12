import { useState } from 'react';

const useMyStates = () => {
    const [number, setNumber] = useState(0);
    const handleNumber = () => {
        setNumber(number + 1);
    };
    const dataCenter = { number, handleNumber };
    return dataCenter;
};

export default useMyStates;
