export default function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
  
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      const context = this as ThisParameterType<T>;
  
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    } as T;
  }