/* eslint-disable no-alert */
import { useState } from 'react';

const AllStates = () => {
    const [user, setUser] = useState(null);

    const handleUser = () => {
        setUser(prompt('set your name'));
    };
    const logOut = () => {
        setUser(null);
    };

    return { user, handleUser, logOut };
};

export default AllStates;
