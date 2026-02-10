import { faBox, faTruckRampBox, faPeopleCarryBox, faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { usePage } from "@inertiajs/react"
import Menu from '@/components/ui/Menu'
import { index as products } from '@/routes/products'
import { index as incomingGoodsIndex } from '@/routes/reports/incoming-goods'
import { index as outgoingGoodsIndex } from '@/routes/reports/outgoing-goods'
import { index as stockReportsIndex } from '@/routes/reports/stock-report'

const Sidebar = () => {
    const { name } = usePage().props;

    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <Menu className='bg-base-200 text-base-content min-h-full w-80 p-4'>
                <a className="btn btn-ghost text-xl hidden lg:inline-block pt-1">{name as string}</a>
                <Menu.Title>Master Data</Menu.Title>
                <Menu.Item href={products()}><FaIcon icon={faBox} className="fa-fw" />Products</Menu.Item>
                <Menu.Title>Reports</Menu.Title>
                <Menu.Item href={stockReportsIndex()}><FaIcon icon={faBoxesStacked} className="fa-fw" />Stock Report</Menu.Item>
                <Menu.Item href={incomingGoodsIndex()}><FaIcon icon={faPeopleCarryBox} className="fa-fw" />Incoming Goods</Menu.Item>
                <Menu.Item href={outgoingGoodsIndex()}><FaIcon icon={faTruckRampBox} className="fa-fw" />Outgoing Goods</Menu.Item>
            </Menu>
        </div>
    );
}

export default Sidebar;
