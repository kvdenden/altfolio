const numberFormatter = new Intl.NumberFormat();
const currencyFormatter = new Intl.NumberFormat({ style: "currency" });

export const formatNumber = number => numberFormatter.format(number);
export const formatCurrency = number => currencyFormatter.format(number);

export const colors = [
  "#3366CC",
  "#DC3912",
  "#FF9900",
  "#109618",
  "#990099",
  "#3B3EAC",
  "#0099C6",
  "#DD4477",
  "#66AA00",
  "#B82E2E",
  "#316395",
  "#994499",
  "#22AA99",
  "#AAAA11",
  "#6633CC",
  "#E67300",
  "#8B0707",
  "#329262",
  "#5574A6",
  "#3B3EAC"
];
