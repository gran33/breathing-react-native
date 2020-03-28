import strings from './messages_en.json';
export type StringKey = keyof typeof strings;
export function getString(key: StringKey): string;
