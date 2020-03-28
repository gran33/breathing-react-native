const strings = require('./strings-he.json');
export function getString(key: string): string {
  return strings[key];
}
