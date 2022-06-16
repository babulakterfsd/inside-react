import { Link } from 'react-router-dom';
import HomesChild from '../Components/HomesChild';
import useAuth from '../Hooks/useAuth';

function Home() {
    const { number, handleNumber, test, handleTest } = useAuth();

    console.log('Home component rendered');

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <h1 style={{ marginBottom: '5px' }}>Number is now {number}</h1>
                <button type="button" onClick={handleNumber}>
                    increase number
                </button>
            </div>
            <div style={{ marginTop: '50px' }}>
                <Link to="/another">
                    <button type="button">Go to another page</button>
                </Link>
            </div>
            <HomesChild test={test} handleTest={handleTest} />
        </div>
    );
}

export default Home;
