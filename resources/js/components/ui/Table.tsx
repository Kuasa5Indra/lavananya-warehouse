import clsx from "clsx";
import { type ReactNode } from "react";

interface TableProps {
    children: ReactNode,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    className?: string
}

const sizeClasses = {
    xs: "table-xs",
    sm: "table-sm",
    md: "table-md",
    lg: "table-lg",
    xl: "table-xl",
};

const Table: React.FC<TableProps> = ({ children, className, size = 'md' }) => {
    return (
        <table className={clsx("table", sizeClasses[size], className)}>
            { children }
        </table>
    );
}

export default Table;
