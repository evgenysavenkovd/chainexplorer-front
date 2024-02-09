import { useState } from 'react';
import styles from './Tabs.module.scss';

export interface TabsProps {
  tabs: {
    title: string;
    element: JSX.Element;
  }[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleTab = (index: number) => () => setCurrentIndex(index);

  return (
    <div className={styles['tabs']}>
      <div className={styles['bar']}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={styles['label']}
            onClick={toggleTab(index)}
            data-current={index === currentIndex}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles['content']}>{tabs[currentIndex].element}</div>
    </div>
  );
};
