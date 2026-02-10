import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Fieldset from '@/components/ui/Fieldset';
import TextInput from '@/components/ui/TextInput';
import AuthLayout from '@/layouts/AuthLayout';
import { login } from '@/routes';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("/register")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.name as keyof typeof data, e.target.value)
    }

    return (
        <AuthLayout>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <Fieldset>
                        <Fieldset.Legend>Full Name</Fieldset.Legend>
                        <TextInput type='text' placeholder="John Doe" className='w-full' name='name'
                            value={data.name} onChange={handleChange} color={`${errors.name ? 'error' : 'neutral'}`} />
                        <Fieldset.Label className={`text-error ${!errors.name && 'hidden'}`}>{errors.name}</Fieldset.Label>
                    </Fieldset>
                    {/* <label className="label">
                        <span className="label-text">Nama Lengkap</span>
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="input input-bordered w-full"
                    /> */}
                </div>

                <div>
                    <Fieldset>
                        <Fieldset.Legend>Email</Fieldset.Legend>
                        <TextInput type='email' placeholder="email@example.com" className='w-full' name='email'
                            value={data.email} onChange={handleChange} color={`${errors.email ? 'error' : 'neutral'}`} />
                        <Fieldset.Label className={`text-error ${!errors.email && 'hidden'}`}>{errors.email}</Fieldset.Label>
                    </Fieldset>
                    {/* <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="input input-bordered w-full"
                    /> */}
                </div>

                <div>
                    <Fieldset>
                        <Fieldset.Legend>Password</Fieldset.Legend>
                        <div className='relative'>
                            <TextInput type={showPassword ? 'text' : 'password'} placeholder="••••••••" className='w-full pr-12'
                                value={data.password} onChange={handleChange} name='password' color={`${errors.password ? 'error' : 'neutral'}`} />
                            <label className="swap absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                                <div className="swap-on"><FaIcon icon={faEye} /></div>
                                <div className="swap-off"><FaIcon icon={faEyeSlash} /></div>
                            </label>
                        </div>
                        <Fieldset.Label className={`text-error ${!errors.password && 'hidden'}`}>{errors.password}</Fieldset.Label>
                    </Fieldset>
                    {/* <label className="label">
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
                    </div> */}
                </div>

                <div>
                    <Fieldset>
                        <Fieldset.Legend>Confirm Password</Fieldset.Legend>
                        <div className='relative'>
                            <TextInput type={showConfirmPassword ? 'text' : 'password'} placeholder="••••••••" className='w-full pr-12'
                                value={data.password_confirmation} onChange={handleChange} name='password_confirmation' color={`${errors.password_confirmation ? 'error' : 'neutral'}`} />
                            <label className="swap absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                <input type="checkbox" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                <div className="swap-on"><FaIcon icon={faEye} /></div>
                                <div className="swap-off"><FaIcon icon={faEyeSlash} /></div>
                            </label>
                        </div>
                        <Fieldset.Label className={`text-error ${!errors.password_confirmation && 'hidden'}`}>{errors.password_confirmation}</Fieldset.Label>
                    </Fieldset>
                    {/* <label className="label">
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
                    </div> */}
                </div>
                <Button color='primary' modifier='block' type='submit'>Register</Button>
                <div className="divider">Alerady have account</div>
                <Button color='secondary' modifier='block' styled='outline' type='button' onClick={() => router.get(login())}>Login</Button>
            </form>
        </AuthLayout>
    );
}

export default RegisterPage;
