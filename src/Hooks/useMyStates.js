/* eslint-disable no-alert */
import { useCallback, useState } from 'react';

const useMyStates = () => {
    const [number, setNumber] = useState(0);
    const [test, setTest] = useState('');

    const handleNumber = () => {
        setNumber((prev) => prev + 1);
    };
    const handleTest = useCallback(() => {
        setTest(prompt(`set your text`));
    }, []);

    // const handleTest = () => setTest(`Babul Awal`);

    const dataCenter = { number, handleNumber, test, handleTest };
    return dataCenter;
};

export default useMyStates;
