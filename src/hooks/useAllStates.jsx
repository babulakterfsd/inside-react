/* eslint-disable no-alert */
import { useState } from 'react';

const AllStates = () => {
    const [user, setUser] = useState('Guest');

    const handleUser = () => {
        setUser(prompt('set your name'));
    };

    return { user, handleUser };
};

export default AllStates;
