/**
 * Converts a standard date string (recognized by the Date constructor) to ISO 8601 format.
 * @param dateString - A valid date string.
 * @returns The ISO 8601 string representation of the date.
 */
const convertToISOString = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString();
};

export default convertToISOString