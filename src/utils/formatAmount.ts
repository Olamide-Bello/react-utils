const formatAmount = (n: number, currency: string = "USD"): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(n);
}
export default formatAmount