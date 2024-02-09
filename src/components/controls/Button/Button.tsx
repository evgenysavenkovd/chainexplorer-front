import { concat } from '@app/utils';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  to?: string;
  disabled?: boolean;
  className?: string;
}>;

export const Button = ({
  onClick,
  to,
  disabled,
  className,
  children,
}: ButtonProps) =>
  to ? (
    <Link to={to} className={concat(styles['button'], className)}>
      <span className={styles['content']}>{children}</span>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={concat(styles['button'], className)}
      disabled={disabled}
    >
      <span className={styles['content']}>{children}</span>
    </button>
  );
