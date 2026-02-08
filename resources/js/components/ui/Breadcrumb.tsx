import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React, { type ReactElement } from "react";

interface BreadcrumbItemProps {
    label: string,
    active?: boolean,
    href?: string | {
        url: string,
        method: "get"
    },
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ label, active, href }) => {
    return (
        <li>{active ? <Link href={href}>{label}</Link> : label}</li>
    );
}

interface BreadcrumbProps {
    children: ReactElement<typeof BreadcrumbItem>[] | ReactElement<typeof BreadcrumbItem>,
    className?: string
}

type BreadcrumbComponent = React.FC<BreadcrumbProps> & {
    Item: typeof BreadcrumbItem;
};

const Breadcrumb: BreadcrumbComponent = ({ children, className }) => {
    return (
        <div className={clsx("breadcrumbs", className)}>
            <ul>
                {children}
            </ul>
        </div>
    );
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
