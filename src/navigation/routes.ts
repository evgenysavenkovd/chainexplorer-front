export interface IRouteInfo {
  path: string;
  paramReplace?: string;
}

function typedRecord<Keys extends string>(record: Record<Keys, IRouteInfo>) {
  return record;
}

export const routes = typedRecord({
  home: {
    path: '/',
  },
  transaction: {
    path: '/tx/:hash',
    paramReplace: ':hash',
  },
  address: {
    path: '/address/:address',
    paramReplace: ':address',
  },
});
