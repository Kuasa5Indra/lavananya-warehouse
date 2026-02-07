import { usePage } from "@inertiajs/react";
import { type FC, type ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    const { name } = usePage().props;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center mb-4">{name as string}</h2>
                    { children }
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
