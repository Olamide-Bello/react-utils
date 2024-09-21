export default function deepMerge<T extends object, U extends object>(
    target: T,
    source: U,
    options: { mergeArrays?: boolean } = {},
    seen = new WeakMap()
  ): T & U {
    const { mergeArrays = false } = options;
  
    // Handle circular references
    if (seen.has(source)) {
      return seen.get(source);
    }
  
    // Create a shallow copy of the target
    const result = { ...target } as T & U;
  
    // Iterate over the source keys
    for (const key of Object.keys(source) as Array<keyof U>) {
      const targetValue = (target as any)[key];
      const sourceValue = (source as any)[key];
  
      // Skip if values are identical
      if (targetValue === sourceValue) {
        continue;
      }
  
      // Handle circular references for the source
      if (seen.has(sourceValue)) {
        result[key] = seen.get(sourceValue);
        continue;
      }
  
      // Handle special objects like Date, RegExp, Set, Map
      if (sourceValue instanceof Date) {
        result[key] = new Date(sourceValue.getTime()) as any;
      } else if (sourceValue instanceof RegExp) {
        result[key] = new RegExp(sourceValue.source, sourceValue.flags) as any;
      } else if (sourceValue instanceof Set) {
        result[key] = new Set(Array.from(sourceValue).map(item => deepMerge({}, item, options, seen))) as any;
      } else if (sourceValue instanceof Map) {
        result[key] = new Map(
          Array.from(sourceValue).map(([mapKey, mapValue]) => [
            deepMerge({}, mapKey, options, seen),
            deepMerge({}, mapValue, options, seen),
          ])
        ) as any;
      } else if (Array.isArray(sourceValue)) {
        if (mergeArrays && Array.isArray(targetValue)) {
          result[key] = [...targetValue, ...sourceValue] as any;
        } else {
          result[key] = [...sourceValue] as any;
        }
      } else if (sourceValue instanceof Object && targetValue instanceof Object) {
        // Recursively merge objects
        result[key] = deepMerge(targetValue, sourceValue, options, seen) as any;
      } else {
        // For other types, overwrite target with source value
        result[key] = sourceValue as any;
      }
    }
  
    seen.set(source, result); // Track seen objects for circular reference handling
    return result as T & U;
  }
  