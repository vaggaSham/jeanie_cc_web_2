import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const horizontalDashedLines = {
  id: "horizontalDashedLines",
  beforeDraw: (chart: any) => {
    const ctx = chart?.ctx;
    const yAxis = chart?.scales?.y;

    if (
      yAxis?.min < chart?.options?.plugins?.dashedLine?.value &&
      yAxis?.max > chart?.options?.plugins?.dashedLine?.value
    ) {
      const dashPattern = chart?.options?.plugins?.dashedLine?.dashPattern;
      const color = chart?.options?.plugins?.dashedLine?.color;
      const valueY = yAxis?.getPixelForValue(
        chart?.options?.plugins?.dashedLine?.value
      );

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash(dashPattern);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.moveTo(chart.chartArea.left, valueY);
      ctx.lineTo(chart.chartArea.right, valueY);
      ctx.stroke();
      ctx.restore();
    }
  },
};

const roundedBarsPlugin = {
  id: "roundedBars",
  beforeDraw: (chart: any) => {
    const { ctx } = chart;
    chart.data.datasets.forEach((dataset: any, datasetIndex: any) => {
      const meta = chart.getDatasetMeta(datasetIndex);

      if (!meta.hidden) {
        meta.data.forEach((bar: any, index: any) => {
          const radius = 10; // Adjust corner radius as needed
          const x = bar.x - bar.width / 2,
            y = bar.y,
            width = bar.width,
            height = bar.height;

          ctx.save();
          // Only round the top edges
          ctx.fillStyle = "#29BAB3";
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          ctx.lineTo(x + width, y + height);
          ctx.lineTo(x, y + height);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        });
      }
    });
  },
};

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [721, 544, 890, 454, 798, 390, 609],
      backgroundColor: "#29BAB3",
    },
  ],
};

export function CostSavingChart() {
  return (
    <Bar
      options={options}
      data={data}
      //   plugins={[roundedBarsPlugin, horizontalDashedLines]}
    />
  );
}
