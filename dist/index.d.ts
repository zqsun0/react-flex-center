import { HTMLAttributes, ReactNode } from 'react';
interface FlexCenterProp extends HTMLAttributes<HTMLDivElement> {
    centering?: 'horizontal' | 'vertical' | 'both';
    children: ReactNode;
}
declare const FlexCenter: import("react").ForwardRefExoticComponent<FlexCenterProp & import("react").RefAttributes<HTMLDivElement>>;
export default FlexCenter;
