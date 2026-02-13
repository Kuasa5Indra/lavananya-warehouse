import clsx from "clsx";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
    className?: string
}

const sizeClasses = {
    xs: "checkbox-xs",
    sm: "checkbox-sm",
    md: "checkbox-md",
    lg: "checkbox-lg",
    xl: "checkbox-xl",
};

const colorClasses = {
    neutral: 'checkbox-neutral',
    primary: 'checkbox-primary',
    secondary: 'checkbox-secondary',
    accent: 'checkbox-accent',
    info: 'checkbox-info',
    success: 'checkbox-success',
    warning: 'checkbox-warning',
    error: 'checkbox-error'
}

const Checkbox: React.FC<CheckboxProps> = ({ inputSize = 'md', color, className, ...props }) => {
    return (
        <input type="checkbox" className={clsx('checkbox', sizeClasses[inputSize], color && colorClasses[color], className)} {...props} />
    );
}

export default Checkbox;
