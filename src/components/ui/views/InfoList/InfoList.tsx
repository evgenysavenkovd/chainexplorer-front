import { Fragment, useMemo } from 'react';
import styles from './InfoList.module.scss';

export interface InfoListItem {
  title: string;
  value: string | number;
}

export interface InfoListProps {
  items: InfoListItem[] | InfoListItem[][];
}

export const InfoList = ({ items }: InfoListProps) => {
  const groups = useMemo(() => {
    if (Array.isArray(items[0])) {
      return items as InfoListItem[][];
    } else return [items as InfoListItem[]];
  }, [items]);

  return (
    <ul className={styles['info-list']}>
      {groups.map((items, index) => (
        <Fragment key={index}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <div className={styles['title']}>{item.title}</div>
              <div className={styles['value']}>{item.value}</div>
            </li>
          ))}
          <hr className={styles['separator']} />
        </Fragment>
      ))}
    </ul>
  );
};
