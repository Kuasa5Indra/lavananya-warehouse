import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { router } from "@inertiajs/react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";
import PageContent from "@/layouts/PageContent";
import { dateFormat } from "@/lib/timezoneConverter";
import { show } from "@/routes/reports/stock-report";
import type { Product } from "@/types";

interface StockReportPageProps {
    products: Product[]
}

const StockReportPage: React.FC<StockReportPageProps> = ({ products }) => {
    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Stock Reports
            </div>
            <Breadcrumb className="text-sm pl-4">
                <Breadcrumb.Item label="Reports" />
                <Breadcrumb.Item label="Stock Reports" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <Card className="bg-base-100 shadow-sm">
                    <div className="overflow-x-auto px-3">
                        <Table size="xs">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Current Stock</th>
                                    <th>Last Date Import</th>
                                    <th>Last Stock In</th>
                                    <th>Last Date Export</th>
                                    <th>Last Stock Out</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(products.map((item, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{item.product_code}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.latest_incoming_goods ? dateFormat(item.latest_incoming_goods.date_import) : '-'}</td>
                                        <td>{item.latest_incoming_goods ? item.latest_incoming_goods.amount : 0}</td>
                                        <td>{item.latest_outgoing_goods ? dateFormat(item.latest_outgoing_goods.date_export) : '-'}</td>
                                        <td>{item.latest_outgoing_goods ? item.latest_outgoing_goods.amount : 0}</td>
                                        <td>
                                            <Button size="xs" color='info' className='join-item' onClick={() => router.get(show(item.id))}>
                                                <FaIcon icon={faEye} />
                                            </Button>
                                        </td>
                                    </tr>
                                )))}
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </div>
        </PageContent>
    );
}

export default StockReportPage;
