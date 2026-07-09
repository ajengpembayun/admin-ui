import React from "react";
import Card from "../Card";

function CardUpcomingBill({ data }) {
  return (
    <Card
      title="Upcoming Bill"
      link="/bill"
      desc={
        <div className="flex flex-col gap-5">
          {data.map((item) => (
            <div key={item.id} className="flex justify-between items-center">

              {/* kiri */}
              <div className="flex items-center">

                <div className="w-14 h-14 bg-special-bg rounded-md flex flex-col justify-center items-center mr-4">
                  <span className="text-[10px]">{item.month}</span>
                  <span className="text-2xl font-bold leading-none">
                    {item.date}
                  </span>
                </div>

                <div className="flex flex-col">

                <div className="w-6 h-6 flex items-center">
                {item.icon}
                </div>

                  <div className="font-bold text-sm">
                    {item.name}
                  </div>

                  <div className="text-xs text-gray-03">
                    Last Charge - {item.lastCharge}
                  </div>

                </div>

              </div>

              {/* kanan */}
              <div className="border border-gray-05 rounded-lg px-4 py-2 font-bold">
                ${item.amount}
              </div>

            </div>
          ))}
        </div>
      }
    />
  );
}

export default CardUpcomingBill;