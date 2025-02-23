export interface Country {
  name: string;
  flag: string;
}

export interface ProductDataType {
  name: string;
  value: number;
  color: string;
}

export const COUNTRY_LIST: Country[] = [
  {
    name: "Myanmar",
    flag: "🇲🇲",
  },
  {
    name: "United States",
    flag: "🇺🇸",
  },
  {
    name: "India",
    flag: "🇮🇳",
  },
  {
    name: "Nigeria",
    flag: "🇳🇬",
  },
  {
    name: "Ghana",
    flag: "🇬🇭",
  },
];

export const Product_Data = [
  { name: "Electronics", value: 30, color: "#FF4D4D" },
  { name: "Clothes", value: 25, color: "#5733FF" },
  { name: "Beauty Care", value: 20, color: "#FFA500" },
  { name: "Books", value: 15, color: "#00CFFF" },
  { name: "Toys", value: 10, color: "#28A745" },
];

export const Weekly_Sales_Data = [
  { day: "Mon", sales: 400, color: "#FF4D4D" },
  { day: "Tue", sales: 300, color: "#5733FF" },
  { day: "Wed", sales: 350, color: "#FFA500" },
  { day: "Thu", sales: 250, color: "#00CFFF" },
  { day: "Fri", sales: 450, color: "#28A745" },
  { day: "Sat", sales: 500, color: "#FFC107" },
];

export const Area_Data = [
  {
    name: "Page A",
    uv: 400,
  },
  {
    name: "Page B",
    uv: 600,
  },
  {
    name: "Page C",
    uv: 550,
  },
  {
    name: "Page D",
    uv: 740,
  },
];

export const Profit_Data = [
  {
    name: "Page A",
    uv: 500,
  },
  {
    name: "Page B",
    uv: 400,
  },
  {
    name: "Page C",
    uv: 650,
  },
  {
    name: "Page D",
    uv: 600,
  },
];
