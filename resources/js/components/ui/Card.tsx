import clsx from "clsx";
import { type ReactNode } from "react";

interface ICardProps {
    children: ReactNode,
    className?: string
}

interface CardProps extends ICardProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    styled?: 'dash' | 'border',
}

const sizeClasses = {
    xs: "card-xs",
    sm: "card-sm",
    md: "card-md",
    lg: "card-lg",
    xl: "card-xl",
};

const styleClasses = {
    dash: 'card-dash',
    border: 'card-border'
}

type CardComponent = React.FC<CardProps> & {
    Body: typeof CardBody
    Actions: typeof CardActions
}

const Card: CardComponent = ({ children, className, styled, size = 'md' }) => {
    return (
        <div className={clsx("card", styled && styleClasses[styled], sizeClasses[size], className)}>
            {children}
        </div>
    );
}

const CardBody: React.FC<ICardProps> = ({ children, className }) => {
    return (
        <div className={clsx("card-body", className)}>
            {children}
        </div>
    )
}

const CardActions: React.FC<ICardProps> = ({ children, className }) => {
    return (
        <div className={clsx("card-actions", className)}>
            {children}
        </div>
    )
}

Card.Body = CardBody
Card.Actions = CardActions

export default Card;
