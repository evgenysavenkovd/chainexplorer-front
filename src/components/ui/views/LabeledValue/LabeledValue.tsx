import { PropsWithChildren } from 'react';
import styles from './LabeledValue.module.scss';

export type LabeledValueProps = PropsWithChildren<{
  label: string;
}>;

export const LabeledValue = ({ label, children }: LabeledValueProps) => (
  <div className={styles['container']}>
    <h4 className={styles['label']}>{label}</h4>
    <div className={styles['content']}>{children}</div>
  </div>
);
