import React from 'react';
import { Link } from 'react-router-dom';
import {
  CustomColumns,
  FieldTransformations,
  TableListDisplay,
  TableListItemSelection,
} from '../types';

export interface TableListItemProps<
  Item extends object,
  TCustomColumns extends string = never,
> {
  item: Item;
  display: TableListDisplay<Item, TCustomColumns>;
  transformations?: FieldTransformations<Item>;
  customColumns?: CustomColumns<Item, TCustomColumns>;
  link?: (item: Item) => string;
  rowClassName?: (item: Item) => string;
  columnClassName?: (key: keyof Item | TCustomColumns, item: Item) => string;
  selection?: TableListItemSelection<Item>;
}

export const TableListItem = <
  Item extends object,
  TCustomColumns extends string = never,
>({
  item,
  display,
  customColumns,
  transformations,
  link,
  columnClassName,
  rowClassName,
  selection,
}: TableListItemProps<Item, TCustomColumns>) => {
  const getColumnValue = (key: keyof Item | TCustomColumns) => {
    const isCustom = !Object.keys(item).includes(key as string);
    if (!isCustom) {
      const transformation = transformations?.[key as keyof Item];
      if (transformation) return transformation(item[key as keyof Item]);
      else return item[key as keyof Item] as string | number | boolean;
    } else if (customColumns && customColumns[key as string]) {
      return customColumns[key as string](item);
    } else {
      return '';
    }
  };
  const Wrapper = link
    ? ({ children }: React.PropsWithChildren<object>) => (
        <Link to={link(item)}>{children}</Link>
      )
    : React.Fragment;

  return (
    <tr className={rowClassName ? rowClassName(item) : undefined}>
      {selection && (
        <td className={selection.className}>
          {selection.render({
            isSelected: selection.isSelected(item),
            onClick: selection.onSelect.bind(null, item),
          })}
        </td>
      )}
      {display.map((key) => (
        <td
          key={key.toString()}
          className={columnClassName ? columnClassName(key, item) : undefined}
          data-link={!!link}
        >
          <Wrapper>{getColumnValue(key)}</Wrapper>
        </td>
      ))}
    </tr>
  );
};
