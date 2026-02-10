import clsx from "clsx";
import { type ReactNode } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children?: ReactNode,
    className?: string,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
}

const sizeClasses = {
    xs: "textarea-xs",
    sm: "textarea-sm",
    md: "textarea-md",
    lg: "textarea-lg",
    xl: "textarea-xl",
};

const colorClasses = {
    neutral: 'textarea-neutral',
    primary: 'textarea-primary',
    secondary: 'textarea-secondary',
    accent: 'textarea-accent',
    info: 'textarea-info',
    success: 'textarea-success',
    warning: 'textarea-warning',
    error: 'textarea-error'
}

const TextArea: React.FC<TextAreaProps> = ({ children, className, size = 'md', color, ...props }) => {
    return (
        <textarea className={clsx("textarea", sizeClasses[size], color && colorClasses[color], className)} {...props}>{children}</textarea>
    );
}

export default TextArea;
