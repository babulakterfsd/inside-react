import React from 'react';
import Dada from './Components/Dada';
import UseReducervsUseState from './Components/UseReducervsUseState';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                flexDirection: 'column',
            }}
        >
            <AuthProvider>
                <Dada />
            </AuthProvider>
            <div style={{ marginTop: '50px' }}>
                <UseReducervsUseState style={{ margin: '30px auto' }} />
            </div>
        </div>
    );
}

export default App;
