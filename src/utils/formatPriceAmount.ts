/**
 * Formats a given amount with commas and a specified currency symbol.
 * @param amount - The amount to be formatted (as a number or string).
 * @param currency - The optional currency code (e.g., "NGN", "USD").
 * @returns A formatted price string with the appropriate currency symbol.
 */
const formatPrice = (amount: number | string, currency: string = ''): string => {
    if (amount === undefined || amount === null || isNaN(Number(amount))) {
        return "Invalid amount";
    }

    // Ensure the amount is converted to a fixed decimal format (2 decimal places)
    const formattedAmount = Number(amount).toFixed(2);
    const [integerPart, decimalPart] = formattedAmount.split('.');

    // Add commas to the integer part for thousands separation
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Determine the currency symbol based on the provided currency code
    let currencySymbol = "";
    switch (currency.toUpperCase()) {
        case "NGN":
            currencySymbol = "₦";
            break;
        case "USD":
            currencySymbol = "$";
            break;
        case "EUR":
            currencySymbol = "€";
            break;
        case "GBP":
            currencySymbol = "£";
            break;
        default:
            currencySymbol = ''; // No symbol for unrecognized currencies
    }

    return `${currencySymbol}${formattedIntegerPart}.${decimalPart}`;
};

export default formatPrice