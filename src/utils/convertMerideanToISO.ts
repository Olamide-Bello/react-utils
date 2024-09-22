/**
 * Converts a date string in MM/DD/YYYY HH:MM AM/PM format to ISO 8601 format.
 * @param dateString - The date string in meridian (12-hour) format.
 * @returns The ISO 8601 string representation of the date.
 */
export const convertMeridianToISO = (dateString: string): string => {
    const [datePart, timePart] = dateString.split(' ');
    const [month, day, year] = datePart.split('/').map(Number);
    const [time, period] = timePart.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    // Handle AM/PM conversion
    if (period === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    // Create date object and convert to ISO
    const date = new Date(year, month - 1, day, hours, minutes);
    return date.toISOString();
};