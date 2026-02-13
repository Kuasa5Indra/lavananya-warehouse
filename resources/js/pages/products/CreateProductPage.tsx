import { Form } from '@inertiajs/react'
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Fieldset from "@/components/ui/Fieldset";
import TextInput from "@/components/ui/TextInput";
import PageContent from "@/layouts/PageContent";
import { store, index } from "@/routes/products";

const CreateProductPage = () => {
    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Create Product
            </div>
            <Breadcrumb className="text-sm pl-4">
                <Breadcrumb.Item label="Home" />
                <Breadcrumb.Item label="Products" active={true} href={index()} />
                <Breadcrumb.Item label="Create Product" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <Card className="bg-base-100 shadow-sm mb-2">
                    <Card.Body>
                        <Form action={store()}>
                            {({ errors }) => (
                                <>
                                    <Fieldset>
                                        <Fieldset.Legend>Product Name</Fieldset.Legend>
                                        <TextInput color={`${errors.product_name ? 'error' : 'neutral'}`} type="text" placeholder="Type here" name="product_name" />
                                        <Fieldset.Label className={`text-error ${!errors.product_name && 'hidden'}`}>{errors.product_name}</Fieldset.Label>
                                    </Fieldset>
                                    <Fieldset>
                                        <Fieldset.Legend>Product Unit</Fieldset.Legend>
                                        <TextInput color={`${errors.product_unit ? 'error' : 'neutral'}`} type="text" placeholder="Type here" name="product_unit" />
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

export default CreateProductPage;
