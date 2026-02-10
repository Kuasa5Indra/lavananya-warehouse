import { faTrashCan, faPencilSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import Join from "@/components/layout/Join";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from '@/components/ui/Button';
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";
import PageContent from "@/layouts/PageContent";
import { create, edit, destroy } from '@/routes/products';
import { type Product } from '@/types';

interface ProductsPageProps {
    products: Product[]
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
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
                    text: "Product has been deleted",
                    icon: "success"
                });
            }
        });
    }

    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Products
            </div>
            <Breadcrumb className="text-sm pl-4">
                <Breadcrumb.Item label="Home" />
                <Breadcrumb.Item label="Products" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <Card className="bg-base-100 shadow-sm mb-2">
                    <Card.Body>
                        <Card.Actions className='justify-end'>
                            <Button color='primary' onClick={() => router.get(create())}><FaIcon icon={faPlus} />Create Data</Button>
                        </Card.Actions>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Product Code</th>
                                        <th>Product Name</th>
                                        <th>Product Unit</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{item.product_code}</td>
                                            <td>{item.product_name}</td>
                                            <td>{item.product_unit}</td>
                                            <td>
                                                <Join>
                                                    <Button color='warning' className='join-item' onClick={() => handleEdit(item.id)}>
                                                        <FaIcon icon={faPencilSquare} />
                                                    </Button>
                                                    <Button color='error' className='join-item' onClick={() => handleDelete(item.id)}>
                                                        <FaIcon icon={faTrashCan} />
                                                    </Button>
                                                </Join>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </PageContent>
    );
}

export default ProductsPage;
