export default function deepFreeze<T>(obj: T): T {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach(prop => {
    const propValue = (obj as any)[prop];
    if (
      propValue !== null &&
      (typeof propValue === "object" || typeof propValue === "function") &&
      !Object.isFrozen(propValue)
    ) {
      deepFreeze(propValue);
    }
  });

  return obj;
}