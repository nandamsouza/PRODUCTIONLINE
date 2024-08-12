/* eslint-disable @typescript-eslint/no-explicit-any */
export function ValidationEqualObjects(
  object1: any,
  object2: any
): any | boolean {
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);

  const commonKeys = keysObj1.filter((key) => keysObj2.includes(key));
  if (commonKeys.length === 0) {
    return false;
  }

  const diffValues: any = {};
  for (const key of commonKeys) {
    if (object1[key] !== object2[key]) {
      diffValues[key] = object1[key];
    }
  }

  return Object.keys(diffValues).length > 0 ? diffValues : false;
}
