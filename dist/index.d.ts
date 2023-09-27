import { HTMLAttributes, ReactNode } from 'react';
interface FlexCenterProp extends HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column' | 'all';
    children: ReactNode;
}
declare const FlexCenter: ({ direction, children, ...props }: FlexCenterProp) => import("react/jsx-runtime").JSX.Element;
export default FlexCenter;
