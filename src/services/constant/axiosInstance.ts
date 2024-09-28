import axios from 'axios';
import { store } from './../store/store';
import { BASE_URL } from './apiConfig';
import { toast } from 'react-toastify';
import { logoutUser, refreshAccessToken } from '../features/auth/authSlice';

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = sessionStorage.getItem('hairSalonToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newAccessToken = await store.dispatch(refreshAccessToken()).unwrap();
                axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                store.dispatch(logoutUser());
                window.location.href = '/login';
                toast.error("Hết hạn đăng nhập. Vui lòng đăng nhập lại!");
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;