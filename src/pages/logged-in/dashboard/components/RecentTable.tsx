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
      className={`shadow-sm rounded-2xl p-5 lg:col-span-4 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-lg">{title}</h1>
        <a href="#" className="text-blue-500 text-sm">
          See all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px] text-left">
          <thead>
            <tr className="bg-gray-300 text-gray-600 text-sm">
              <th className="py-2 px-3">Profile</th>
              <th className="py-2 px-3">City</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id} className="border-t border-gray-300">
                <td className="py-3 px-3 flex items-center space-x-3 whitespace-nowrap">
                  <img
                    src={order.img}
                    alt={order.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">{order.name}</span>
                </td>

                <td className="py-3 px-3 whitespace-nowrap">
                  <div className="flex items-center space-x-1">
                    <MapPinIcon className="text-red-500 w-4 h-4" />
                    <span className="text-sm">{order.city}</span>
                  </div>
                </td>

                <td className="py-3 px-3 text-sm whitespace-nowrap">
                  {order.date}
                </td>

                <td className="py-3 px-3 flex items-center space-x-1 whitespace-nowrap">
                  {order.status === "Delivered" ? (
                    <CheckCircleIcon className="text-green-500 w-4 h-4" />
                  ) : (
                    <XCircleIcon className="text-red-500 w-4 h-4" />
                  )}
                  <span className="text-sm">{order.status}</span>
                </td>

                <td className="py-3 px-3 font-semibold text-sm whitespace-nowrap">
                  {order.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
