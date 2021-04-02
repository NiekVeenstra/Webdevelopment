import React, { useEffect, useRef } from "react";
import { Line, defaults } from "react-chartjs-2";
import Chartjs from "chart.js";
import { historyOptions } from "../../chartConfigs/chartConfigs";

const HistoryChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "# of Votes",
              data: [
                { x: 1, y: 15 },
                { x: 2, y: 12 },
                { x: 3, y: 25 },
                { x: 4, y: 23 },
                { x: 5, y: 20 },
              ],
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4)",
              pointRadius: "0",
              borderWidth: 1,
            },
          ],
        },
        options: historyOptions,
      });
    }
  });
  return (
    <div className="chart-container">
      <div></div>
      <div>
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
    </div>
  );
};

export default HistoryChart;
