import clsx from "clsx";
import { type ReactNode } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode,
    className?: string,
    inputSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
}

interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    children: ReactNode,
}

const sizeClasses = {
    xs: "select-xs",
    sm: "select-sm",
    md: "select-md",
    lg: "select-lg",
    xl: "select-xl",
};

const colorClasses = {
    neutral: 'select-neutral',
    primary: 'select-primary',
    secondary: 'select-secondary',
    accent: 'select-accent',
    info: 'select-info',
    success: 'select-success',
    warning: 'select-warning',
    error: 'select-error'
}

type SelectComponent = React.FC<SelectProps> & {
    Option: typeof SelectOption
}

const Select: SelectComponent = ({ children, className, inputSize = 'md', color, ...props }) => {
    return (
        <select className={clsx("select", sizeClasses[inputSize], color && colorClasses[color], className)} {...props}>
            { children }
        </select>
    );
}

const SelectOption: React.FC<SelectOptionProps> = ({ children, ...props }) => {
    return (
        <option {...props}>{children}</option>
    );
}

Select.Option = SelectOption

export default Select;
