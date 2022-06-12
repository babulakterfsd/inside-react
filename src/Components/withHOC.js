/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

const withHOC = (OriginalComponent) => {
    const [count, setCount] = useState(0);
    const handleCounter = () => {
        setCount(count + 1);
    };
    const [user, setUser] = useState(`Guest`);
    const handleUser = () => {
        setUser(prompt(`Set your name`));
    };

    return (
        <OriginalComponent
            count={count}
            clickHandler={handleCounter}
            user={user}
            handleUser={handleUser}
        />
    );
};

export default withHOC;
