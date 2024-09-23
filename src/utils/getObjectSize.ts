export default function getObjectSize(obj: any): number {
    const cache = new Set();

    const stringified = JSON.stringify(obj, (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (cache.has(value)) {
                // Circular reference found, discard key
                return;
            }
            cache.add(value);
        }
        return value;
    });

    cache.clear(); // Clear the cache to avoid memory leaks
    
    // Calculate size based on UTF-8 encoding of the stringified object
    return new TextEncoder().encode(stringified).length;
}
