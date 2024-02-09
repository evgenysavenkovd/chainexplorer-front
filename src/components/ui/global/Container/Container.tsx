import { Outlet } from 'react-router-dom';
import styles from './Container.module.scss';

export const Container = () => (
  <div className={styles['container']}>
    <div className={styles['content']}>
      <Outlet />
    </div>
  </div>
);
