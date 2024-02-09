import { useMemo } from 'react';
import { TableListSelection } from '../types';

export const useSelection = <Item extends object>(
  items: Item[],
  keyExtractor: (item: Item) => string,
  selection?: TableListSelection<Item>,
) => {
  const itemsKeys = useMemo(
    () => items.map(keyExtractor),
    [items, keyExtractor],
  );
  const selectedKeys = useMemo(
    () => selection?.selected?.map(keyExtractor) || [],
    [selection, keyExtractor],
  );

  const isAllSelected = useMemo(() => {
    let count = 0;
    for (const key of itemsKeys) if (selectedKeys.includes(key)) count++;
    return count === itemsKeys.length;
  }, [selectedKeys, itemsKeys]);

  if (!selection) return undefined;

  const { selected, setSelected } = selection;

  const selectAll = () => {
    const allItems = [...selected, ...items];
    const uniqueKeys = [...new Set([...itemsKeys, ...selectedKeys])];
    const itemsMap = allItems.reduce(
      (previous, item) => ({
        ...previous,
        [keyExtractor(item)]: item,
      }),
      {} as Record<string, Item>,
    );
    setSelected(uniqueKeys.map((key) => itemsMap[key]));
  };

  const clearSelection = () => {
    setSelected(
      selected.filter((item) => !itemsKeys.includes(keyExtractor(item))),
    );
  };

  const selectItem = (item: Item) => setSelected([...selected, item]);
  const deselectItem = (item: Item) => {
    const key = keyExtractor(item);
    setSelected(selected.filter((item) => keyExtractor(item) !== key));
  };

  const onSelectAll = () => {
    if (isAllSelected) clearSelection();
    else selectAll();
  };

  const onSelect = (item: Item) => {
    const key = keyExtractor(item);
    if (selectedKeys.includes(key)) deselectItem(item);
    else selectItem(item);
  };

  const isSelected = (item: Item) => selectedKeys.includes(keyExtractor(item));

  return { ...selection, onSelectAll, onSelect, isSelected, isAllSelected };
};
