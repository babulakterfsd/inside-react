import ClickCounter from '../Components/ClickCounter';
import Counter from '../Components/Counter';
import HoverCounter from '../Components/HoverCounter';

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
        </div>
    );
}

export default Home;
