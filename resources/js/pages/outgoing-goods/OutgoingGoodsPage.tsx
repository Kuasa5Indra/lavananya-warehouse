import { faPencilSquare, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
import Join from "@/components/layout/Join";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";
import PageContent from "@/layouts/PageContent";
import { dateFormat } from "@/lib/timezoneConverter";
import { create, edit, destroy } from "@/routes/reports/outgoing-goods";
import type { OutgoingGoodsReport } from "@/types";

interface OutgoingGoodsPageProps {
    reports: OutgoingGoodsReport[]
}

const OutgoingGoodsPage: React.FC<OutgoingGoodsPageProps> = ({ reports }) => {
    const handleEdit = (id: string) => {
        router.get(edit(id))
    }

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showDenyButton: true,
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(destroy(id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Successfully deleted outgoing goods report",
                    icon: "success"
                });
            }
        });
    }

    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Outgoing Goods
            </div>
            <Breadcrumb className="text-sm pl-4">
                <Breadcrumb.Item label="Reports" />
                <Breadcrumb.Item label="Outgoing Goods" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <Card className="bg-base-100 shadow-sm">
                    <Card.Actions className='justify-end my-2 pr-3'>
                        <Button size="xs" color='primary' onClick={() => router.get(create())}><FaIcon icon={faPlus} />Create Data</Button>
                    </Card.Actions>
                    <div className="overflow-x-auto px-3">
                        <Table size="xs">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Amount</th>
                                    <th>Date Export</th>
                                    <th>Updated at</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.map((item, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{item.product.product_code}</td>
                                        <td>{item.product.product_name}</td>
                                        <td>{item.amount}</td>
                                        <td>{dateFormat(item.date_export)}</td>
                                        <td>{dateFormat(item.updated_at)}</td>
                                        <td>
                                            <Join>
                                                <Button size="xs" color='warning' className='join-item' onClick={() => handleEdit(item.id)}>
                                                    <FaIcon icon={faPencilSquare} />
                                                </Button>
                                                <Button size="xs" color='error' className='join-item' onClick={() => handleDelete(item.id)}>
                                                    <FaIcon icon={faTrashCan} />
                                                </Button>
                                            </Join>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </div>
        </PageContent>
    );
}

export default OutgoingGoodsPage;
