/**
 * Formats a phone number to the specified international format.
 * @param phoneNumber - The phone number to be formatted.
 * @param countryCode - The country code (e.g., "234" for Nigeria, "1" for the USA).
 * @returns A formatted phone number with the specified country code or undefined if invalid.
 */
export const formatPhoneNumber = (phoneNumber: string | undefined, countryCode: string): string | undefined => {
    if (!phoneNumber || phoneNumber.trim() === "") return undefined;

    // Remove non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Return the number if it already starts with the country code
    if (phoneNumber.startsWith(countryCode)) {
        return `+${phoneNumber}`;
    }

    // If the number starts with "+<countryCode>", return it as is
    if (phoneNumber.startsWith(`+${countryCode}`)) {
        return phoneNumber;
    }

    // Remove leading "0" if the number starts with it (common in many local formats)
    if (phoneNumber.startsWith('0')) {
        phoneNumber = phoneNumber.slice(1);
    }

    // Format and return the number with the specified international country code
    return `+${countryCode}${phoneNumber}`;
};