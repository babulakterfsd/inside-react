import useAuth from '../hooks/useAuth';

function PrivateRoute({ children }) {
    const { user } = useAuth();
    // const location = useLocation();
    if (user) {
        console.log(user);
        return children;
    }
    // return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
