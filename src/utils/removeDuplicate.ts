export default function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

