import { HTMLAttributes, ReactNode } from 'react';
interface FlexToCenterProp extends HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column' | 'all';
    children: ReactNode;
}
declare const FlexToCenter: ({ direction, children, ...props }: FlexToCenterProp) => import("react/jsx-runtime").JSX.Element;
export default FlexToCenter;
