export default function deepClone<T>(obj: T, seen = new WeakMap()): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (seen.has(obj)) {
        return seen.get(obj);
    }

    let clonedObj: any;

    if (obj instanceof Date) {
        clonedObj = new Date(obj.getTime());
    } else if (obj instanceof Set) {
        clonedObj = new Set();
        seen.set(obj, clonedObj);
        obj.forEach(item => clonedObj.add(deepClone(item, seen)));
    } else if (obj instanceof Map) {
        clonedObj = new Map();
        seen.set(obj, clonedObj);
        obj.forEach((value, key) => clonedObj.set(deepClone(key, seen), deepClone(value, seen)));
    } else if (obj instanceof RegExp) {
        clonedObj = new RegExp(obj.source, obj.flags);
    } else if (isDomElement(obj) || isWindowObject(obj)) {
        throw new Error('Cannot clone DOM elements or system objects');
    } else {
        clonedObj = Object.create(Object.getPrototypeOf(obj));
        seen.set(obj, clonedObj);

        const descriptors = Object.getOwnPropertyDescriptors(obj);
        for (const key in descriptors) {
            const descriptor = descriptors[key];

            if ('value' in descriptor) {
                descriptor.value = deepClone(descriptor.value, seen);
            }
            Object.defineProperty(clonedObj, key, descriptor);
        }
    }

    return clonedObj;
}

function isDomElement(obj: any): obj is HTMLElement | Node {
    return obj instanceof HTMLElement || obj instanceof Node;
}

function isWindowObject(obj: any): obj is Window {
    return obj === window || obj === globalThis;
}