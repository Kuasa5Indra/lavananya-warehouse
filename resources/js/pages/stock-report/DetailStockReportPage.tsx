import Breadcrumb from "@/components/ui/Breadcrumb";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";
import PageContent from "@/layouts/PageContent";
import { dateFormat } from "@/lib/timezoneConverter";
import { index } from "@/routes/reports/stock-report";
import type { Product } from "@/types";

interface DetailStockReportPageProps {
    product: Product
}

const DetailStockReportPage: React.FC<DetailStockReportPageProps> = ({ product }) => {
    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Detail Stock Report
            </div>
            <Breadcrumb className="text-sm pl-4">
                <Breadcrumb.Item label="Reports" />
                <Breadcrumb.Item label="Stock Reports" active href={index()} />
                <Breadcrumb.Item label="Detail Stock Report" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <Card className="bg-base-100 shadow-sm">
                    <div className="grid grid-cols-2 p-3 gap-2">
                        <div>
                            <h2 className="font-bold">Product Code</h2>
                            <p>{product.product_code}</p>
                        </div>
                        <div>
                            <h2 className="font-bold">Product Name</h2>
                            <p>{product.product_name}</p>
                        </div>
                        <div>
                            <h2 className="font-bold">Current Stock</h2>
                            <p>{product.stock}</p>
                        </div>
                        <div>
                            <h2 className="font-bold">Product Unit</h2>
                            <p>{product.product_unit}</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">Incoming Goods Report</div>
                        <div className="collapse-content text-sm">
                            <div className="overflow-x-auto px-3">
                                <Table size="xs">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Date Import</th>
                                            <th>Amount</th>
                                            <th>Annotation</th>
                                            <th>Updated at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.incoming_goods?.map((item, index) => (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td>{dateFormat(item.date_import)}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.annotation}</td>
                                                <td>{dateFormat(item.updated_at)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">Outgoing Goods Report</div>
                        <div className="collapse-content text-sm">
                            <div className="overflow-x-auto px-3">
                                <Table size="xs">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Date Export</th>
                                            <th>Amount</th>
                                            <th>Annotation</th>
                                            <th>Updated at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.outgoing_goods?.map((item, index) => (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td>{dateFormat(item.date_export)}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.annotation}</td>
                                                <td>{dateFormat(item.updated_at)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </PageContent>
    );
}

export default DetailStockReportPage;
