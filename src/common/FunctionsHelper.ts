export function stringToEnum<T extends string>(obj: Array<T>): {[K in T]: K} {
    return obj.reduce((res, key) => {
      res[key] = key;
      return res;
    }, Object.create(null));
}

export function stringToDate(stringDate: string): Date{
  const stringArray: string[] = stringDate.split('-');
  return new Date(+stringArray[0], +stringArray[1], +stringArray[2]) ;
}