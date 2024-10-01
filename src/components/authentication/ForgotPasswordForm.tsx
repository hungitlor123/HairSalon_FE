import { useAppDispatch } from '@/services/store/store';
import { useState } from 'react';
import { toast } from "react-toastify";
import { forgotPassword } from '@/services/features/auth/authSlice';

const ForgotPasswordForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        dispatch(forgotPassword(email))
            .unwrap()
            .then(() => {
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.response?.data);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <>
            <div className="my-auto mb-auto  flex flex-col  w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:max-w-[450px]">
                <p className="text-[32px] font-bold text-white text-center">Forgot Your Password?</p>
                <div className="relative my-4 text-center">
                    <div className="relative flex items-center py-1">
                        <div className="grow border-t border-zinc-700"></div>
                        <div className="grow border-t border-zinc-700"></div>
                    </div>
                </div>
                <p className="text-center text-sm text-zinc-400">
                    Enter your email and we'll send you a link to reset your password.
                </p>
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="grid gap-2 mt-4">
                        <div className="grid gap-1">
                            <label className="text-white" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-700 bg-gray-800 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-0"
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-600 text-white hover:bg-yellow-500 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send Reset Link"}
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-white">
                    Remember your password?{" "}
                    <a href="/login" className="font-medium text-yellow-500 hover:text-yellow-400">
                        Sign In
                    </a>
                </p>
            </div>
        </>
    );
};

export default ForgotPasswordForm;
