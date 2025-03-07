/* eslint-disable @typescript-eslint/no-explicit-any */
const isObject = (value: any): boolean => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

const mapNestedJson = (
  data: Record<string, any>,
  onProcessObjectProperty: (key: string, value: any) => any
): Record<string, any> => {
  if (!data || typeof data !== 'object') {
    return {};
  }

  return Object.keys(data).reduce((result, key) => {
    const value = data[key];

    if (Array.isArray(value)) {
      return {
        ...result,
        [key]: value.map((elem) => mapNestedJson(elem, onProcessObjectProperty)),
      };
    }

    if (isObject(value)) {
      return {
        ...result,
        [key]: mapNestedJson(value, onProcessObjectProperty),
      };
    }

    const finalValue = onProcessObjectProperty ? onProcessObjectProperty(key, value) : value;

    return { ...result, [key]: finalValue };
  }, {});
};

export { isObject, mapNestedJson };
