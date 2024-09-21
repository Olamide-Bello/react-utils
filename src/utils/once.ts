export default function once<T extends (...args: any[]) => any>(fn: T): T {
    let executed = false;
    let result: ReturnType<T> | Promise<ReturnType<T>>;
    
    return (async (...args: Parameters<T>) => {
      if (!executed) {
        executed = true;
        result = fn(...args);
        if (result instanceof Promise) {
          result = await result;
        }
      }
      return result;
    }) as T;
  }