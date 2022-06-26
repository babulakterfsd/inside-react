/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import useFirebase from './useFirebase';

const AllStates = () => {
    const { user, handleGoogleLogin, logOut } = useFirebase();

    return { user, handleGoogleLogin, logOut };
};

export default AllStates;
