/* eslint-disable no-alert */
import { useCallback, useState } from 'react';

const useMyStates = () => {
    const [number, setNumber] = useState(0);
    const [test, setTest] = useState('');

    // only first time the whole loop will run, useMemo will rember the result and it won't take time from the next click, until I pass a dependancy and it's been changed
    // const aBigCalculation = useMemo(() => {
    //     let i = 0;
    //     while (i < 10000000000) {
    //         i += 1;
    //     }
    // }, []);

    const handleNumber = () => {
        setNumber((prev) => prev + 1);
    };
    const handleTest = useCallback(() => {
        setTest(prompt(`set your text`));
    }, []);

    const dataCenter = { number, handleNumber, test, handleTest };
    return dataCenter;
};

export default useMyStates;
