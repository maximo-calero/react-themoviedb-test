export function stringToEnum<T extends string>(obj: Array<T>): {[K in T]: K} {
    return obj.reduce((res, key) => {
      res[key] = key;
      return res;
    }, Object.create(null));
}