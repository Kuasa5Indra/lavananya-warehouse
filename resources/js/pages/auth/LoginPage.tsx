import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Fieldset from '@/components/ui/Fieldset';
import TextInput from '@/components/ui/TextInput';
import AuthLayout from '@/layouts/AuthLayout';
import { register } from '@/routes';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("/login")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.name as keyof typeof data, e.target.value)
    }

    return (
        <AuthLayout>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <Fieldset>
                        <Fieldset.Legend>Email</Fieldset.Legend>
                        <TextInput type='email' placeholder="email@example.com" className='w-full' name='email'
                            value={data.email} onChange={handleChange} color={`${errors.email ? 'error' : 'neutral'}`} />
                        <Fieldset.Label className={`text-error ${!errors.email && 'hidden'}`}>{errors.email}</Fieldset.Label>
                    </Fieldset>
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
                </div>

                {/* <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text ml-2">Remember me</span>
                    </label>
                </div> */}

                <Button color='primary' modifier='block' type='submit'>Login</Button>
                <div className="divider">Dont have account</div>
                <Button color='secondary' modifier='block' styled='outline' type='button' onClick={() => router.get(register())}>Register</Button>
            </form>
        </AuthLayout>
    );
}

export default LoginPage;
