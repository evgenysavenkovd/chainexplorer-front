import styles from './Pagination.module.scss';

export interface NavButtonProps {
  direction: 'prev' | 'next';
}

export const NavButton = ({ direction }: NavButtonProps) => {
  return (
    <div className={styles['nav-button']} data-direction={direction}>
      <svg
        width="7"
        height="10"
        viewBox="0 0 7 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.68421 1.57764L2 5.02895L5.68421 8.71316"
          strokeWidth="2.36842"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
