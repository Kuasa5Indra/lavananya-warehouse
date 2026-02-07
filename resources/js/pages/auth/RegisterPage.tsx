import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import AuthLayout from '@/layouts/AuthLayout';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <AuthLayout>
            <form className="flex flex-col gap-4">
                <div>
                    <label className="label">
                        <span className="label-text">Nama Lengkap</span>
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            className="input input-bordered w-full pr-12"
                        />
                        <label className="swap absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                            <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                            <div className="swap-on"><FaIcon icon={faEye} /></div>
                            <div className="swap-off"><FaIcon icon={faEyeSlash} /></div>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            className="input input-bordered w-full pr-12"
                        />
                        <label className="swap absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                            <input type="checkbox" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                            <div className="swap-on"><FaIcon icon={faEye} /></div>
                            <div className="swap-off"><FaIcon icon={faEyeSlash} /></div>
                        </label>
                    </div>
                </div>

                <button className="btn btn-primary btn-block">Register</button>
                <div className="divider">Alerady have account</div>
                <button className="btn btn-outline btn-secondary btn-block">Login</button>
            </form>
        </AuthLayout>
    );
}

export default RegisterPage;
