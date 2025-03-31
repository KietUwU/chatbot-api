// @ts-nocheck
import { getJsonProperty } from '../metacode';

function replaceObject<T = any>(value: T): T {

  if (typeof value === 'object') {
    if (value.toJson !== undefined) {
      return value.toJson();
    }
    if (value instanceof Array) {
      if (value.length === 0) {
        return undefined;
      }
      // @ts-ignore
      return value.map(replaceObject);
    }
    const replaceKeys = [];
    Object.keys(value).forEach((key) => {
      if (key !== undefined && key !== null) {
        const tmp = getJsonProperty(value, key);
        if (tmp !== undefined) {
          const { propertyName, toJson } = tmp;
          if (propertyName !== undefined) {
            replaceKeys.push({ from: key, to: propertyName, toJson });
          }
        }

      }

    });
    if (replaceKeys.length > 0) {
      const tmp = { ...value };
      replaceKeys.forEach(({ from, to, toJson }) => {
        if (to !== undefined) {
          if (toJson !== undefined) {
            tmp[to] = toJson(value);
          } else {
            tmp[to] = tmp[from];
          }
          if (from !== to) {
            delete tmp[from];
          }
        }


      });
      return tmp;
    }
    return value;
  }

  return value;

}

function replacer(key: string, value: any) {
  if (key === 'parent') { return undefined; }

  return replaceObject(value);
}

export function jsonStringify(object) {
  return JSON.stringify(object, replacer);
}
