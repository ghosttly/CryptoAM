import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface LineChartProps {
  coinHistory: any;
}

export const LineChart: React.FC<LineChartProps> = ({ coinHistory }) => {
  const [x, setX] = useState<any>([]);
  const [y, setY] = useState<any>([]);
  useEffect(() => {
    let coinPrice = [];
    let coinTimestamp = [];
    if (coinHistory) {
      for (let i = 0; i < coinHistory?.history?.length; i++) {
        coinPrice.push(coinHistory?.history[i].price);
      }

      for (let i = 0; i < coinHistory?.history?.length; i++) {
        coinTimestamp.push(
          new Date(
            coinHistory?.history[i].timestamp * 1000
          ).toLocaleDateString()
        );
      }
      coinPrice.reverse();
      coinTimestamp.reverse();
      setX(coinPrice);
      setY(coinTimestamp);
    }
  }, [coinHistory]);

  const data = {
    labels: y,
    datasets: [
      {
        label: "Price In USD",
        data: x,
        borderWidth: 0.5,
        borderColor: "#0071bd",
        pointRadius: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};
