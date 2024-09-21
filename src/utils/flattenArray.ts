export default function flattenArray<T>(arr: T[]): T[] {
    const stack = [...arr]
    const result: T[] = [];
  
    while (stack.length > 0) {
      const next = stack.pop();
  
      if (Array.isArray(next)) {
        stack.push(...next)
      } else {
        result.push(next as T)
      }
    }
  
    return result.reverse();
  }
  