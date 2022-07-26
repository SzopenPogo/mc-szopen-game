interface Object {
  [key: string]: any;
}

export const filterEmptyObject = (object: any) => {
  const newObject = {} as Object;
  Object.keys(object).forEach((key, index) => {
    if (object[key]) {
      newObject[key] = object[key]
    }
  });

  return newObject;
}