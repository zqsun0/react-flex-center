import { HTMLAttributes, ReactNode } from 'react';
interface FlexCenterProp extends HTMLAttributes<HTMLDivElement> {
    centering?: 'horizontal' | 'vertical' | 'both';
    children: ReactNode;
}
declare const FlexCenter: ({ centering, children, ...props }: FlexCenterProp) => import("react/jsx-runtime").JSX.Element;
export default FlexCenter;
