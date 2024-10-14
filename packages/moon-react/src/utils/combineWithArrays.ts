export type ObjectWithArrays = {
  [key: string]: any[];
};

export function combineArraysFromObject<T>(obj: ObjectWithArrays): T[] {
  return Object.values(obj).flat() as T[];
}
