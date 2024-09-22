/**
 * Determines the time of day (morning, afternoon, or night) based on the provided ISO string.
 * @param isoString - The ISO 8601 string representation of the date.
 * @returns A string representing the time of day ('morning', 'afternoon', or 'night').
 */
export const getTimeOfDay = (isoString: string): string => {
    const date = new Date(isoString);
    const hours = date.getUTCHours();

    if (hours >= 5 && hours < 12) {
        return 'morning';
    } else if (hours >= 12 && hours < 18) {
        return 'afternoon';
    } else {
        return 'night';
    }
};