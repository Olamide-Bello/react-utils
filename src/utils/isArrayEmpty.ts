export default function isArrayEmpty(arr: any[] | null | undefined): boolean {
    return !arr || arr.length === 0;
}
