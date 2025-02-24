export interface Country {
  name: string;
  flag: string;
}

export interface ProductDataType {
  name: string;
  value: number;
  color: string;
}

export interface OrderDataType {
  id: number;
  name: string;
  city: string;
  date: string;
  status: string;
  price: string;
  img: string;
}

export interface CardDataType {
  amount: string;
  previousAmount: string;
}

export interface CustomerSatisfactionDataType {
  name: string;
  lastMonth: number;
  thisMonth: number;
}

export interface SalesTargetDataType {
  name: string;
  value: number;
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

export const Order_Data: OrderDataType[] = [
  {
    id: 1,
    name: "Kuppuraj",
    city: "Coimbatore",
    date: "03-09-2023",
    status: "Delivered",
    price: "₹ 18,999",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dinesh",
    city: "Chennai",
    date: "03-09-2023",
    status: "Cancelled",
    price: "₹ 2,200",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Logu",
    city: "Bangalore",
    date: "03-09-2023",
    status: "Delivered",
    price: "₹ 24,432",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

export const Customer_Satisfaction_Data = [
  { name: "Jan", lastMonth: 30, thisMonth: 50 },
  { name: "Feb", lastMonth: 50, thisMonth: 60 },
  { name: "Mar", lastMonth: 40, thisMonth: 55 },
  { name: "Apr", lastMonth: 60, thisMonth: 70 },
  { name: "May", lastMonth: 50, thisMonth: 65 },
  { name: "Jun", lastMonth: 70, thisMonth: 90 },
];

export const Sales_Target_Data: SalesTargetDataType[] = [
  { name: "Achieved", value: 82 },
  { name: "Remaining", value: 18 },
];
