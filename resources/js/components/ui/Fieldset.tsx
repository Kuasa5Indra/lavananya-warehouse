import clsx from "clsx";
import { type ReactNode } from "react";

interface FieldsetProps {
    children: ReactNode
}

interface FieldsetLabelProps {
    children: ReactNode,
    className?: string
}

type FieldsetComponent = React.FC<FieldsetProps> & {
    Legend: typeof FieldsetLegend
    Label: typeof FieldsetLabel
}

const Fieldset: FieldsetComponent = ({ children }) => {
    return (
        <fieldset className="fieldset">
            { children }
        </fieldset>
    );
}

const FieldsetLegend: React.FC<FieldsetProps> = ({ children }) => {
    return (
        <legend className="fieldset-legend">{ children }</legend>
    );
}

const FieldsetLabel: React.FC<FieldsetLabelProps> = ({ children, className }) => {
    return (
        <p className={clsx("label", className)}>{ children }</p>
    );
}

Fieldset.Legend = FieldsetLegend;
Fieldset.Label = FieldsetLabel;

export default Fieldset;
