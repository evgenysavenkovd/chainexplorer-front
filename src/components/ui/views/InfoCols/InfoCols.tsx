import { ReactNode } from 'react';
import styles from './InfoCols.module.scss';

export interface InfoColsProps {
  children: ReactNode[];
}

export const InfoCols = ({ children }: InfoColsProps) => {
  return (
    <div className={styles['cols']} data-cols={children.length}>
      {children.map((child, index) => (
        <div key={index} className={styles['col']}>
          {child}
        </div>
      ))}
    </div>
  );
};
