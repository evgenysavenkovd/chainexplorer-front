import { TableListHeaderSelection } from '../types';
import { TableListItemProps } from './TableListItem';

export interface TableListHeaderProps<
  Item extends object,
  TCustomColumns extends string = never,
> extends Pick<TableListItemProps<Item, TCustomColumns>, 'display'> {
  headings: Partial<Record<keyof Item | TCustomColumns, string | JSX.Element>>;
  sorting?: {
    columns: (keyof Item | TCustomColumns)[];
    current: {
      key: keyof Item | TCustomColumns;
      order: 'asc' | 'desc';
    };
    icon: (props: { order: 'asc' | 'desc' }) => JSX.Element;
    onSort: (key: keyof Item | TCustomColumns) => () => void;
  };
  headingRowClassName?: string;
  selection?: TableListHeaderSelection<Item>;
}

export const TableListHeader = <
  Item extends object,
  TCustomColumns extends string = never,
>({
  display,
  headings,
  sorting,
  headingRowClassName,
  selection,
}: TableListHeaderProps<Item, TCustomColumns>) => (
  <thead>
    <tr className={headingRowClassName}>
      {selection && (
        <th>
          {selection.selectAllRender({
            isSelected: selection.isAllSelected,
            onClick: selection.onSelectAll,
          })}
        </th>
      )}
      {display.map((key) => (
        <th
          key={key.toString()}
          onClick={sorting ? sorting.onSort(key) : undefined}
        >
          <span>
            {headings[key]}
            {sorting &&
              (sorting.columns.includes(key) && sorting.current.key === key
                ? sorting.icon({ order: sorting.current.order })
                : undefined)}
          </span>
        </th>
      ))}
    </tr>
  </thead>
);
