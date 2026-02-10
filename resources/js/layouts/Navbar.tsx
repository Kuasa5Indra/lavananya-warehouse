import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { usePage } from "@inertiajs/react"
import Menu from '@/components/ui/Menu';
import { logout } from '@/routes';

const Navbar = () => {
    const { name, auth } = usePage().props;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="lg:hidden">
                    <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <FaIcon icon={faBars} className="fa-xl" />
                    </label>
                </div>
                <a className="btn btn-ghost text-xl drawer-button lg:hidden">{name as string}</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={`https://ui-avatars.com/api/?name=${auth.user.name as string}`} width={100} height={100} />
                        </div>
                    </div>
                    <Menu tabIndex={0} size='sm' className='dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                        <Menu.Item href={logout()}>Logout</Menu.Item>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
