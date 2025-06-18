import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import _ from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  tension: number;
}

interface StockChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export const StockChart: React.FC = () => {
  const [data, setData] = useState<StockChartData>({
    labels: [],
    datasets: [],
  });

  const refreshData = (): void => {
    const labels = _.range(0, 100).map((i: number) => "T" + i);
    const values = _.range(0, 100).map(() => Math.random() * 1000);

    setData({
      labels,
      datasets: [
        {
          label: "Price",
          data: values,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          tension: 0.1,
        },
      ],
    });
  };

  useEffect(() => {
    refreshData();
    const timer = setInterval(refreshData, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Line data={data} />
    </div>
  );
};
