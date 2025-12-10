import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function ProtectedRoute() {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className='text-white text-3xl'>Loading...</div>
    }

    return (
        user ? <Outlet /> : <Navigate to='/auth' replace />
    )
}

export default ProtectedRoute;