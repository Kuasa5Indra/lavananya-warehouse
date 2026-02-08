import clsx from "clsx";
import { type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    styled?: 'outline' | 'dash' | 'soft' | 'ghost' | 'link',
    behavior?: 'active' | 'disabled',
    modifier?: 'wide' | 'block' | 'square' | 'circle',
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
}

const sizeClasses = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    xl: "btn-xl",
};

const styleClasses = {
    outline: "btn-outline",
    dash: "btn-dash",
    soft: "btn-soft",
    ghost: "btn-ghost",
    link: "btn-link"
}

const behaviorClasses = {
    active: 'btn-active',
    disabled: 'btn-disabled'
}

const modifierClasses = {
    wide: 'btn-wide',
    block: 'btn-block',
    square: 'btn-square',
    circle: 'btn-circle'
}

const colorClasses = {
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error'
}

const Button: React.FC<ButtonProps> = ({
        children,
        className,
        size = "md",
        styled,
        behavior,
        modifier,
        color,
        ...props
    }) => {
    return (
        <button
            {...props}
            className={clsx("btn", sizeClasses[size], styled && styleClasses[styled], behavior && behaviorClasses[behavior], modifier && modifierClasses[modifier], color && colorClasses[color], className)}>
            {children}
        </button>
    );
}

export default Button;
