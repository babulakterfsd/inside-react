import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Components/AllRoutes';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AllRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
