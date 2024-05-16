import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartOptions } from "./utils";

interface LineChartProps {}

const LineChart: React.FC<LineChartProps> = () => {

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={300}
      />
    </div>
  );
};

export default LineChart;
