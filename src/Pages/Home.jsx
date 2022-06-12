import ClickCounter from '../Components/ClickCounter';
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
            <ClickCounter />
            <HoverCounter />
            <User />
        </div>
    );
}

export default Home;
