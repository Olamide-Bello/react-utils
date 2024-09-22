export default function generateUUID(): string {
    const randomBytes = crypto.getRandomValues(new Uint8Array(16));

    // Set the version number (4) in the appropriate position
    randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40; // Version 4

    // Set the variant to the appropriate format (8, 9, A, or B)
    randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80; // Variant 1

    const hexValues = [...randomBytes].map(b => b.toString(16).padStart(2, '0'));

    // Join the byte values and insert hyphens at the correct positions
    return `${hexValues.slice(0, 4).join('')}-${hexValues.slice(4, 6).join('')}-${hexValues.slice(6, 8).join('')}-${hexValues.slice(8, 10).join('')}-${hexValues.slice(10, 16).join('')}`;
}

