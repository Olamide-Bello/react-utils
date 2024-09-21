interface ThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
}

export default function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number,
    options: ThrottleOptions = { leading: true, trailing: false }
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let lastArgs: Parameters<T> | null = null;
    let lastContext: ThisParameterType<T> | null = null;
    let result: ReturnType<T> | undefined;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const now = Date.now();

        if (!lastCall && options.leading === false) {
            lastCall = now;
        }

        const remainingTime = limit - (now - lastCall);

        lastArgs = args;
        lastContext = this;

        const invokeFunc = () => {
            lastCall = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(lastContext, lastArgs!);
        };

        if (remainingTime <= 0 || remainingTime > limit) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            invokeFunc();
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(invokeFunc, remainingTime);
        }

        return result;
    };
}
