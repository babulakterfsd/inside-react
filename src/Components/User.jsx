/* eslint-disable no-unused-vars */
import Counter from './withHOC';

function User() {
    const insideUser = ({ user, handleUser }) => (
        <div style={{ marginLeft: '50px' }}>
            <button type="button" onClick={handleUser}>
                click here
            </button>
            <h3>your name is {user}</h3>
        </div>
    );

    return Counter(insideUser);
}

export default User;
