export type TableListDisplay<
  Item extends object,
  CustomColumns extends string = never,
> = (keyof Item | CustomColumns)[];

export type FieldTransformation<Item extends object, key extends keyof Item> = (
  value: Item[key],
) => string | JSX.Element;

export type FieldTransformations<Item extends object> = Partial<{
  [key in keyof Item]: FieldTransformation<Item, key>;
}>;

export type CustomColumns<
  Item extends object,
  T extends string = never,
> = T extends never
  ? never
  : Record<T, (item: Item) => string | number | JSX.Element>;

export type Selection<Item extends object> = {
  render: (props: { isSelected: boolean; onClick: () => void }) => JSX.Element;
  isSelected: (item: Item) => boolean;
  onSelect: (item: Item) => void;
  selectAllRender: (props: {
    isSelected: boolean;
    onClick: () => void;
  }) => JSX.Element;
  isAllSelected: boolean;
  onSelectAll: () => void;
  selected: Item[];
  setSelected: (items: Item[]) => void;
  className?: string;
};

export type TableListSelection<Item extends object> = Pick<
  Selection<Item>,
  'className' | 'render' | 'selectAllRender' | 'selected' | 'setSelected'
>;

export type TableListItemSelection<Item extends object> = Pick<
  Selection<Item>,
  'className' | 'isSelected' | 'onSelect' | 'render'
>;

export type TableListHeaderSelection<Item extends object> = Pick<
  Selection<Item>,
  'selectAllRender' | 'isAllSelected' | 'onSelectAll'
>;
