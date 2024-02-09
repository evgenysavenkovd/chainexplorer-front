export const concat = (...arr: (string | undefined)[]) => arr.join(' ');

export const transformLongString = (
  str: string | undefined,
  start = 4,
  end = 6,
) =>
  str
    ? [str.slice(0, start), '...', str.slice(str.length - end)].join('')
    : '---';
