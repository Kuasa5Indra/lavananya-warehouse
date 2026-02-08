import { faBox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { usePage } from "@inertiajs/react"
import Menu from '@/components/ui/Menu'
import { index } from '@/routes/products'

const Sidebar = () => {
    const { name } = usePage().props;

    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <Menu className='bg-base-200 text-base-content min-h-full w-80 p-4'>
                <a className="btn btn-ghost text-xl hidden lg:inline-block pt-1">{name as string}</a>
                <Menu.Title>Master Data</Menu.Title>
                <Menu.Item href={index()}><FaIcon icon={faBox} className="fa-fw" />Products</Menu.Item>
            </Menu>
        </div>
    );
}

export default Sidebar;
