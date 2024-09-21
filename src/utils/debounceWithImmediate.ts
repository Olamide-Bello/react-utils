export default function debounceWithImmediate<T extends (...args: any[]) => any>(fn: T, delay: number): T {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return ((...args: Parameters<T>) => {
        const callNow = !timeout;
        clearTimeout(timeout!)
        timeout = setTimeout(() => {
            timeout = null
        }, delay);

        if (callNow) fn(...args)
    }) as T;
}
