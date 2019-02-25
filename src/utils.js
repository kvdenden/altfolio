const numberFormatter = new Intl.NumberFormat();
const currencyFormatter = new Intl.NumberFormat({ style: "currency" });

export const formatNumber = number => numberFormatter.format(number);
export const formatCurrency = number => currencyFormatter.format(number);
