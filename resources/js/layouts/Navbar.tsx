import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { usePage } from "@inertiajs/react"

const Navbar = () => {
    const { name } = usePage().props;

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
                            <img src='https://ui-avatars.com/api/?name=John+Doe' width={100} height={100} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
