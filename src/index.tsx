import { forwardRef, HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { clsx } from 'clsx';

// because the useId hook doesn't exist in react@17
// try to get the useId from 'react', if it doesn't exist, it will be undefined
const { useId } = require('react');

interface FlexCenterProp extends HTMLAttributes<HTMLDivElement> {
  centering?: 'horizontal' | 'vertical' | 'both';
  children: ReactNode;
}

/**
 * @description A flex layout component for centering content
 * @author zqsun
 * @version 5.0
 * @param {object} props - Component properties
 * @param {('horizontal' | 'vertical' | 'both')} [props.centering='both'] - Centering direction. The options are 'horizontal', 'vertical', or 'both'. The default is 'both'.
 *   - 'horizontal': Centers content horizontally
 *   - 'vertical': Centers content vertically
 *   - 'both': Centers content both horizontally and vertically
 * @param {React.ReactNode} props.children - Child elements
 * @returns {JSX.Element} - FlexCenter component
 */

function useFallbackId() {
  const idRef = useRef<string>('');

  useEffect(() => {
    if (idRef.current == '') {
      idRef.current = 'flex-center-' + Math.random().toString(36).slice(2, 11);
    }
  }, []);

  return idRef.current;
}

const FlexCenter = forwardRef<HTMLDivElement, FlexCenterProp>(({ centering = 'both', children, ...props }, ref) => {
  const id = useId ? useId() : useFallbackId();

  const getFlexStyle = () => {
    switch (centering) {
      case 'both':
        return 'FLEX_ALL_CENTER';
      case 'horizontal':
        return 'FLEX_WIDTH_CENTER';
      case 'vertical':
        return 'FLEX_HEIGHT_CENTER';
      default:
        return '';
    }
  };

  return (
    <div id={'FlexCenter-' + id} ref={ref} {...props} className={clsx(getFlexStyle(), props.className)}>
      {children}
    </div>
  );
});
FlexCenter.displayName = 'FlexCenter';

export default FlexCenter;
