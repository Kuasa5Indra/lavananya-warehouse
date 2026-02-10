import { Link } from "@inertiajs/react";
import clsx from "clsx";
import { type ReactNode } from "react";

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
    children: ReactNode,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    className?: string
}

interface MenuTitleProps {
    children: ReactNode,
}

interface MenuItemProps {
    children: ReactNode,
    className?: string,
    href: string | {
        url: string,
        method: "get" | "post" | "put" | "patch" | "delete"
    },
}

const sizeClasses = {
    xs: "menu-xs",
    sm: "menu-sm",
    md: "menu-md",
    lg: "menu-lg",
    xl: "menu-xl",
};

type MenuComponent = React.FC<MenuProps> & {
    Title: typeof MenuTitle
    Item: typeof MenuItem
}

const Menu: MenuComponent = ({ children, size = 'md', className, ...props }) => {
    return (
        <ul className={clsx("menu", sizeClasses[size], className)} {...props}>
            { children }
        </ul>
    );
}

const MenuTitle: React.FC<MenuTitleProps> = ({ children }) => {
    return (
        <li className="menu-title">{ children }</li>
    );
}

const MenuItem: React.FC<MenuItemProps> = ({ children, className, href }) => {
    return (
        <li><Link href={href} className={className}>{ children }</Link></li>
    );
}

Menu.Title = MenuTitle;
Menu.Item = MenuItem;

export default Menu;
