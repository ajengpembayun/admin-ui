import Card from "../Card";
import Icon from "../Icon";

function CardExpense({ data }) {
  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "housing":
        return <Icon.House />;
      case "food":
        return <Icon.Food />;
      case "transportation":
        return <Icon.Transport />;
      case "shopping":
        return <Icon.Shopping />;
      case "entertainment":
        return <Icon.Gamepad />;
      default:
        return <Icon.Other />;
    }
  };

  const getArrow = (trend) => {
    if (trend === "up") {
      return (
        <span className="text-red-500">
          <Icon.ArrowUp size={15} />
        </span>
      );
    }

    return (
      <span className="text-green-500">
        <Icon.ArrowDown size={15} />
      </span>
    );
  };

  return (
    <Card
      title=""
      desc={
        <div>
          <div className="flex justify-between mb-5">
            <div className="flex">
              <div className="bg-special-bg p-3 rounded-lg">
                {getIcon(data.category)}
              </div>

              <div className="ml-3">
                <div className="text-gray-400 capitalize">
                  {data.category}
                </div>

                <div className="font-bold text-xl">
                  ${data.amount}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="flex justify-end items-center">
                <span>{data.percentage}%</span>

                {getArrow(data.trend)}
              </div>

              <div className="text-xs text-gray-400">
                Compare to the last month
              </div>
            </div>
          </div>

          {data.detail.map((item, index) => (
            <div
              key={index}
              className="border-t py-3"
            >
              <div className="flex justify-between">
                <span>{item.item}</span>

                <span>${item.amount}</span>
              </div>

              <div className="text-xs text-right text-gray-400">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

export default CardExpense;