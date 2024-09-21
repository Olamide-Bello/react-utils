export default function toggleValue<T>(value: T, val1: T, val2: T): T {
    return value === val1 ? val2 : val1;
}