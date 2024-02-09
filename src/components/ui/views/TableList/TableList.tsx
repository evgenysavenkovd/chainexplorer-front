import { PropsWithChildren } from 'react';
import styles from './TableList.module.scss';
import {
  TableListHeader,
  TableListHeaderProps,
  TableListItem,
  TableListItemProps,
} from './components';
import { useSelection } from './hooks';
import { TableListSelection } from './types';

export type TableListProps<
  Item extends object,
  TCustomColumns extends string = never,
> = Pick<
  TableListItemProps<Item, TCustomColumns>,
  | 'display'
  | 'customColumns'
  | 'transformations'
  | 'link'
  | 'columnClassName'
  | 'rowClassName'
> &
  Pick<
    TableListHeaderProps<Item, TCustomColumns>,
    'headings' | 'sorting' | 'headingRowClassName'
  > &
  PropsWithChildren<{
    items: Item[];
    selection?: TableListSelection<Item>;
    keyExtractor: (item: Item) => string;
  }>;

export const TableList = <
  Item extends object,
  TCustomColumns extends string = never,
>({
  display,
  headings,
  items,
  customColumns,
  transformations,
  link,
  sorting,
  columnClassName,
  headingRowClassName,
  rowClassName,
  selection,
  keyExtractor,
  children,
}: TableListProps<Item, TCustomColumns>) => {
  const selectionParams = useSelection(items, keyExtractor, selection);

  return (
    <div className={styles['container']}>
      <table className={styles['table']}>
        <TableListHeader
          display={display}
          headings={headings}
          sorting={sorting}
          headingRowClassName={headingRowClassName}
          selection={selectionParams}
        />
        <tbody>
          {items.map((item) => (
            <TableListItem
              key={keyExtractor(item)}
              item={item}
              display={display}
              customColumns={customColumns}
              transformations={transformations}
              link={link}
              columnClassName={columnClassName}
              rowClassName={rowClassName}
              selection={selectionParams}
            />
          ))}
        </tbody>
      </table>
      {children}
    </div>
  );
};
