import { Form } from "@inertiajs/react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Fieldset from "@/components/ui/Fieldset";
import Select from "@/components/ui/Select";
import TextArea from "@/components/ui/TextArea";
import TextInput from "@/components/ui/TextInput";
import PageContent from "@/layouts/PageContent";
import { index, update } from "@/routes/reports/incoming-goods";
import type { Product, IncomingGoodsReport } from "@/types";

interface EditIncomingGoodsPageProps {
    products: Product[],
    report: IncomingGoodsReport
}

const EditIncomingGoodsPage: React.FC<EditIncomingGoodsPageProps> = ({ products, report }) => {
    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Update Incoming Goods Report
            </div>
            <Breadcrumb className="text-sm pl-4">
                <Breadcrumb.Item label="Reports" />
                <Breadcrumb.Item label="Incoming Goods" active={true} href={index()} />
                <Breadcrumb.Item label="Update Incoming Goods Report" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <Card className="bg-base-100 shadow-sm mb-2">
                    <Card.Body>
                        <Form action={update(report.id)}>
                            {({ errors }) => (
                                <>
                                    <Fieldset>
                                        <Fieldset.Legend>Date Import</Fieldset.Legend>
                                        <TextInput color={`${errors.date_import ? 'error' : 'neutral'}`} type="datetime-local" placeholder="Type here" name="date_import" defaultValue={report.date_import.toString()} />
                                        <Fieldset.Label className={`text-error ${!errors.date_import && 'hidden'}`}>{errors.date_import}</Fieldset.Label>
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

export default EditIncomingGoodsPage;
