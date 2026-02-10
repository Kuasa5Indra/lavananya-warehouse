import clsx from "clsx";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
    className?: string
}

const sizeClasses = {
    xs: "input-xs",
    sm: "input-sm",
    md: "input-md",
    lg: "input-lg",
    xl: "input-xl",
};

const colorClasses = {
    neutral: 'input-neutral',
    primary: 'input-primary',
    secondary: 'input-secondary',
    accent: 'input-accent',
    info: 'input-info',
    success: 'input-success',
    warning: 'input-warning',
    error: 'input-error'
}

const TextInput: React.FC<TextInputProps> = ({ inputSize = 'md', color, className, ...props }) => {
    return (
        <input className={clsx('input', sizeClasses[inputSize], color && colorClasses[color], className)} {...props}  />
    );
}

export default TextInput;
