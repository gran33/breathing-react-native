const strings = require('./strings-he.json');
export type StringKey = keyof typeof strings;


export function getString(key: StringKey): string {
  return strings[key];
}
