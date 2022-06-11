import ClickCounter from '../Components/ClickCounter';
import Counter from '../Components/Counter';
import HoverCounter from '../Components/HoverCounter';
import User from '../Components/User';

function Home() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Counter>
                {(counter, setCounter) => <ClickCounter count={counter} setCount={setCounter} />}
            </Counter>
            <Counter>
                {(counter, setCounter) => <HoverCounter count={counter} setCount={setCounter} />}
            </Counter>
            <Counter>
                {(counter, setCounter, user, handleUser) => (
                    <User user={user} handleUser={handleUser} />
                )}
            </Counter>
        </div>
    );
}

export default Home;
