import { registerAcount, setError } from '@/services/features/auth/authSlice';
import { useAppDispatch } from '@/services/store/store';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
type FormValue = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const RegisterForm: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const form = useForm<FormValue>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    // const [showPassword, setShowPassword] = useState(false)
    // const handleShowPass = () => {
    //     setShowPassword(!showPassword);
    // }

    // const [showConfirmPass, setShowConfirmPass] = useState(false)
    // const handleShowConfirmPass = () => {
    //     setShowConfirmPass(!showConfirmPass)
    // }

    const onSubmit = (data: FormValue) => {
        dispatch(registerAcount(data))
            .unwrap()
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                console.error('Registration failed:', error);
            });
    }
    useEffect(() => {
        return () => {
            form.reset()
            dispatch(setError(null))
        }
    })
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mb-4"
            >
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <label className="text-white" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-700 bg-gray-800 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-0"
                            id="firstName"
                            placeholder="John"
                            type="text"
                            {...register("firstName", { required: "Enter your first name" })}
                            required
                        />
                        {errors.firstName && <p className='text-sm text-red-500'>* {errors.firstName.message}</p>}

                        <label className="text-white" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-700 bg-gray-800 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-0"
                            id="lastName"
                            placeholder="Doe"
                            type="text"
                            {...register("lastName", { required: "Enter your last name" })}
                            required
                        />
                        {errors.lastName && <p className='text-sm text-red-500'>* {errors.lastName.message}</p>}

                        <label className="text-white" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-700 bg-gray-800 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-0"
                            id='email'
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            {...register("email", { required: "Enter your email address" })}
                            required
                        />
                        {errors.email && <p className='text-sm text-red-500'>* {errors.email.message}</p>}
                        <label className="text-white" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            placeholder="Password"
                            type="password"
                            className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-700 bg-gray-800 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-0"
                            {...register("password", { required: "Enter your password" })}
                            required
                        />
                        {errors.password && <p className='text-sm text-red-500'>* {errors.password.message}</p>}
                        <label className="text-white" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-700 bg-gray-800 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-0"
                            {...register("confirmPassword", { required: "Confirm your password" })}
                            required
                        />
                        {errors.confirmPassword && <p className='text-sm text-red-500'>* {errors.confirmPassword.message}</p>}
                    </div>
                    <button
                        className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-600 text-white hover:bg-yellow-500 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            <p className="mt-4 text-center text-white">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-yellow-500 hover:text-yellow-400">
                    Sign In
                </a>
            </p>
        </>
    );
};

export default RegisterForm;
