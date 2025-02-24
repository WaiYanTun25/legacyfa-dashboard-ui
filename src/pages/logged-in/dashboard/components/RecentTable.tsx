import {
  MapPinIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "@src/hooks";
import { OrderDataType } from "@src/utils/constants";

export const RecentTable = ({
  data,
  title,
}: {
  data: OrderDataType[];
  title: string;
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`shadow-sm rounded-2xl p-5  lg:col-span-4 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-lg ">{title}</h1>
        <a href="#" className="text-blue-500 text-sm">
          See all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[320px] text-center">
          <thead>
            <tr className="text-left bg-gray-300 text-gray-600 text-sm">
              <th className="py-2 px-3 w-[px]">Profile</th>
              <th className="py-2 px-3 w-[20px]">City</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id} className="border-t border-gray-300">
                <td className="py-3 px-3 flex items-center space-x-3">
                  <img
                    src={order.img}
                    alt={order.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="">{order.name}</span>
                </td>
                <td className="py-3 px-3">
                  <MapPinIcon className="text-red-500 w-4 h-4 my-auto" />
                  <span className="">{order.city}</span>
                </td>
                <td className="py-3 px-3 ">{order.date}</td>
                <td className="py-3 px-3 flex items-center space-x-1">
                  {order.status === "Delivered" ? (
                    <CheckCircleIcon className="text-green-500 w-4 h-4" />
                  ) : (
                    <XCircleIcon className="text-red-500 w-4 h-4" />
                  )}
                  <span className="">{order.status}</span>
                </td>
                <td className="py-3 px-3 font-semibold ">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
