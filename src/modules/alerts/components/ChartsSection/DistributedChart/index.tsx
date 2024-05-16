import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartOptions } from "./utils";

interface DistributedChartProps {}

const DistributedChart: React.FC<DistributedChartProps> = () => {

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={213}
      />
    </div>
  );
};

export default DistributedChart;
