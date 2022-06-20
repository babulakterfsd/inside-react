import React from 'react';
import Dada from './Components/Dada';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Dada />
        </AuthProvider>
    );
}

export default App;
