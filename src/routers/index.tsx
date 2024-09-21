import LoginForm from '@/components/authentication/LoginForm'
import RegisterForm from '@/components/authentication/RegisForm'
import Home from '@/page/customer/home/Homepage'
import { Navigate, Route, Routes } from 'react-router-dom'
const AppRouter = () => {
    const token = sessionStorage.getItem("hairSalon")
    return (
        <Routes>
            {token === null ? (
                <>
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/register' element={<RegisterForm />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
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