import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { clsx } from 'clsx';

// 尝试从 'react' 中导入 useId，如果不存在则为 undefined
const { useId } = require('react');

interface FlexToCenterProp extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'all';
  children: ReactNode;
}

/**
 * @description 用于居中的 flex 布局组件
 * @author zqsun
 * @version 3.0
 * @param {object} props - 组件属性
 * @param {('row' | 'column' | 'all')} [props.direction='all'] - 居中方向，可选值为 'row'、'column' 或 'all'，默认为 'all'
 *   - 'row': 在水平方向上进行水平居中
 *   - 'column': 在垂直方向上进行垂直居中
 *   - 'all': 在水平和垂直方向上同时进行居中
 * @param {React.ReactNode} props.children - 子元素
 * @returns {JSX.Element} - FlexToCenter 组件
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

const FlexToCenter = ({ direction = 'all', children, ...props }: FlexToCenterProp) => {
  const id = useId ? useId() : useFallbackId();

  const getFlexStyle = () => {
    if (direction === 'all') {
      return 'FLEX_ALL_CENTER';
    } else if (direction === 'row') {
      return 'FLEX_WIDTH_CENTER';
    } else {
      return 'FLEX_HEIGHT_CENTER';
    }
  };

  return (
    <div id={'FlexToCenter-' + id} {...props} className={clsx(getFlexStyle(), props.className)}>
      {children}
    </div>
  );
};

export default FlexToCenter;
