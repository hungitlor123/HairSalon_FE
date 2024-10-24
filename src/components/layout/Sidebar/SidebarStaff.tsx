import { logoutUser } from '@/services/features/auth/authSlice';
import { useAppDispatch } from '@/services/store/store';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



interface SideBarProps {
    onToggle: (isOpen: boolean) => void;
}

const SideBarStaff: React.FC<SideBarProps> = ({ onToggle }) => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
    };

    useEffect(() => {
        onToggle(isOpen);
    }, [isOpen, onToggle]);

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="p-2 m-2 text-gray-600 rounded-md fixed top-2 left-2 z-50"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-900 text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                aria-label="Sidebar"
            >
                <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto">
                    <div>
                        <div className="flex flex-col items-center pb-4">
                            <img
                                className="w-16 h-16 mb-3 rounded-full shadow-lg"
                                src="https://www.svgrepo.com/show/301043/employee-worker.svg"
                                alt="Profile"
                            />
                            <h2 className="text-xl font-bold">STAFF</h2>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/staff-management"
                                    className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                    </svg>

                                    <span className="ml-3">Booking</span>
                                </Link>
                            </li>

                        </ul>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/schedule-management"
                                    className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>


                                    <span className="ml-3">Schedule</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full p-2 text-gray-300 rounded-lg hover:bg-gray-700 group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                            />
                        </svg>
                        <span className="ml-3">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default SideBarStaff;
