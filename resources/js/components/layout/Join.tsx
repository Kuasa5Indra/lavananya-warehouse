import clsx from "clsx";
import { type ReactNode } from "react";

interface JoinProps {
    children: ReactNode,
    direction?: 'vertical' | 'horizontal'
}

const directionClasses = {
    vertical: 'join-vertical',
    horizontal: 'join-horizontal'
}

const Join: React.FC<JoinProps> = ({ children, direction }) => {
    return (
        <div className={clsx("join", direction && directionClasses[direction])}>
            { children }
        </div>
    );
}

export default Join;
