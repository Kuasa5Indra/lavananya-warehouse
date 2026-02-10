import { Form } from '@inertiajs/react'
import Swal from "sweetalert2";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Fieldset from "@/components/ui/Fieldset";
import TextInput from "@/components/ui/TextInput";
import PageContent from "@/layouts/PageContent";
import { update } from '@/routes/products';
import { type Product } from '@/types';

interface EditProductPageProps {
    product: Product
}

const EditProductPage: React.FC<EditProductPageProps> = ({ product }) => {
    const handleSuccess = () => {
        Swal.fire({
            title: "Success",
            text: "Successfully update product",
            icon: "success"
        });
    }

    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Edit Product
            </div>
            <Breadcrumb className="text-sm pl-4">
                <Breadcrumb.Item label="Home" active={true} />
                <Breadcrumb.Item label="Products" />
                <Breadcrumb.Item label="Edit Product" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <Card className="bg-base-100 shadow-sm mb-2">
                    <Card.Body>
                        <Form action={update(product.id)} onSuccess={handleSuccess}>
                            {({ errors }) => (
                                <>
                                    <Fieldset>
                                        <Fieldset.Legend>Product Name</Fieldset.Legend>
                                        <TextInput color={`${errors.product_name ? 'error' : 'neutral'}`} type="text" placeholder="Type here" name="product_name" defaultValue={product.product_name} />
                                        <Fieldset.Label className={`text-error ${!errors.product_name && 'hidden'}`}>{errors.product_name}</Fieldset.Label>
                                    </Fieldset>
                                    <Fieldset>
                                        <Fieldset.Legend>Product Unit</Fieldset.Legend>
                                        <TextInput color={`${errors.product_unit ? 'error' : 'neutral'}`} type="text" placeholder="Type here" name="product_unit" defaultValue={product.product_unit} />
                                        <Fieldset.Label className={`text-error ${!errors.product_unit && 'hidden'}`}>{errors.product_unit}</Fieldset.Label>
                                    </Fieldset>
                                    <Button color="primary" type="submit">Submit</Button>
                                </>
                            )}
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </PageContent>
    );
}

export default EditProductPage;
