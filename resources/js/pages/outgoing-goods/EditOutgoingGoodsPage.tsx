import { Form } from "@inertiajs/react";
import Swal from "sweetalert2";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Fieldset from "@/components/ui/Fieldset";
import Select from "@/components/ui/Select";
import TextArea from "@/components/ui/TextArea";
import TextInput from "@/components/ui/TextInput";
import PageContent from "@/layouts/PageContent";
import { index, update } from "@/routes/reports/outgoing-goods";
import type { Product, OutgoingGoodsReport } from "@/types";

interface EditOutgoingGoodsPageProps {
    products: Product[],
    report: OutgoingGoodsReport
}

const EditOutgoingGoodsPage: React.FC<EditOutgoingGoodsPageProps> = ({ products, report }) => {
    const handleSuccess = () => {
        Swal.fire({
            title: "Success",
            text: "Successfully update outgoing goods report",
            icon: "success"
        });
    }

    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Update Outgoing Goods Report
            </div>
            <Breadcrumb className="text-sm pl-4">
                <Breadcrumb.Item label="Reports" />
                <Breadcrumb.Item label="Outgoing Goods" active={true} href={index()} />
                <Breadcrumb.Item label="Update Outgoing Goods Report" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <Card className="bg-base-100 shadow-sm mb-2">
                    <Card.Body>
                        <Form action={update(report.id)} onSuccess={handleSuccess}>
                            {({ errors }) => (
                                <>
                                    <Fieldset>
                                        <Fieldset.Legend>Date Export</Fieldset.Legend>
                                        <TextInput color={`${errors.date_export ? 'error' : 'neutral'}`} type="datetime-local" placeholder="Type here" name="date_export" defaultValue={report.date_export.toString()} />
                                        <Fieldset.Label className={`text-error ${!errors.date_export && 'hidden'}`}>{errors.date_export}</Fieldset.Label>
                                    </Fieldset>
                                    <Fieldset>
                                        <Fieldset.Legend>Product</Fieldset.Legend>
                                        <Select color={`${errors.product_id ? 'error' : 'neutral'}`} defaultValue={report.product_id} name="product_id" className="appearance-none">
                                            <Select.Option disabled>Pick a product</Select.Option>
                                            {products.map((item, index) => (
                                                <Select.Option key={index} value={item.id}>{item.product_code} {item.product_name}</Select.Option>
                                            ))}
                                        </Select>
                                        <Fieldset.Label className={`text-error ${!errors.product_id && 'hidden'}`}>{errors.product_id}</Fieldset.Label>
                                    </Fieldset>
                                    <Fieldset>
                                        <Fieldset.Legend>Amount</Fieldset.Legend>
                                        <TextInput color={`${errors.amount ? 'error' : 'neutral'}`} type="number" placeholder="Type here" name="amount" min={1} defaultValue={report.amount} />
                                        <Fieldset.Label className={`text-error ${!errors.amount && 'hidden'}`}>{errors.amount}</Fieldset.Label>
                                    </Fieldset>
                                    <Fieldset>
                                        <Fieldset.Legend>Annotation</Fieldset.Legend>
                                        <TextArea color={`${errors.annotation ? 'error' : 'neutral'}`} placeholder="Fill annotation report here" name="annotation" defaultValue={report.annotation}></TextArea>
                                        <Fieldset.Label className={`text-error ${!errors.annotation && 'hidden'}`}>{errors.annotation}</Fieldset.Label>
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

export default EditOutgoingGoodsPage;
