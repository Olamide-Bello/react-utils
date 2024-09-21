import generateUUID from "./generateUUID";

export default function generateUniqueId(prefix: string = 'id'): string {
    return `${prefix}-${generateUUID()}`;
}