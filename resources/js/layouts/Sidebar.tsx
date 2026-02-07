import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { usePage } from "@inertiajs/react"

const Sidebar = () => {
    const { name } = usePage().props;
    
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <a className="btn btn-ghost text-xl hidden lg:inline-block pt-1">{name as string}</a>
                <li className="menu-title">Title</li>
                <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Sidebar Item 1</a></li>
                <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Sidebar Item 2</a></li>
                <li>
                    <details open>
                        <summary><FaIcon icon={faThumbsUp} className="fa-fw" />Parent</summary>
                        <ul>
                            <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Submenu 1</a></li>
                            <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Submenu 2</a></li>
                            <li>
                                <details open>
                                    <summary><FaIcon icon={faThumbsUp} className="fa-fw" />Parent</summary>
                                    <ul>
                                        <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Submenu 1</a></li>
                                        <li><a><FaIcon icon={faThumbsUp} className="fa-fw" />Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
