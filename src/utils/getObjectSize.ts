export default function getObjectSize(obj: any): number {
    const stringified = JSON.stringify(obj);
    return new Blob([stringified]).size;
}