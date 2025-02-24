import React from "react";

export const DashboardCard = ({
  icon,
  amount,
  title,
  color,
  previousAmount,
}: {
  icon: React.ReactElement;
  amount: string;
  title: string;
  color: string;
  previousAmount: string;
}) => {
  return (
    <div
      className={`${color} text-black shadow lg:rounded-[2em] rounded-[1em] lg:p-5 p-2 lg:pr-10`}
    >
      <div className="flex justify-between">
        {icon}
        <span className="font-bold lg:text-4xl sm:text-lg text-lg mt-auto">
          {amount}
        </span>
      </div>
      <div className="block float-right">
        <h3 className="lg:text-xl text-sm text-end">{title}</h3>
        <span className="text-blue-600 lg:text-sm text-xs">
          {previousAmount}
        </span>
      </div>
    </div>
  );
};
