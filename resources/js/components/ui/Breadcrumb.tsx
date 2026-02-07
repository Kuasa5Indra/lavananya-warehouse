import React, { type ReactElement } from "react";

interface BreadcrumbItemProps {
    label: string,
    active?: boolean
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ label, active }) => {
    return (
        <li>{active ? <a>{label}</a> : label}</li>
    );
}

interface BreadcrumbProps {
    children: ReactElement<typeof BreadcrumbItem>[] | ReactElement<typeof BreadcrumbItem>;
}

type BreadcrumbComponent = React.FC<BreadcrumbProps> & {
    Item: typeof BreadcrumbItem;
};

const Breadcrumb: BreadcrumbComponent = ({ children }) => {
    return (
        <div className="breadcrumbs text-sm pl-4">
            <ul>
                {children}
            </ul>
        </div>
    );
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
