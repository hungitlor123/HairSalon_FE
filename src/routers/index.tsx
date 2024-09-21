import LoginForm from '@/components/authentication/LoginForm'
import Home from '@/page/customer/home/Homepage'
import { Navigate, Route, Routes } from 'react-router-dom'
const AppRouter = () => {
    const token = sessionStorage.getItem("hairSalon")
    return (
        <Routes>
            {token === null ? (
                <>
                    <Route path='/ ' element={<LoginForm />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                    <Route path='/' element={<Home />} />
                </>
            ) : (
                <>
                </>
            )}

        </Routes>
    )
}
export default AppRouter