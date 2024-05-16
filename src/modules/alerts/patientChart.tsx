import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PatientChart() {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data: any = {
    labels: ["Active", "Pending"],
    datasets: [
      {
        data: [61, 39],
        backgroundColor: ["#29BAB3", "#F0B829"],
        borderWidth: 0,
      },
    ],
  };
  const LegendItems = ({ legend }: any) => {
    return (
      <div className="px-2 flex flex-col -mt-4">
        {legend.map((label: any, index: any) => {
          return (
            <div key={label} className="flex space-x-2 items-center">
              <div
                className={`h-3 w-3 rounded-full bg-[${data.datasets[0].backgroundColor[index]}]`}
              ></div>
              <span className="text-[#4B5970]">{label}</span>
            </div>
          );
        })}
      </div>
    );
  };
  //   return <Pie data={data} options={options} />;
  return (
    <>
      <div className="">
        <Pie data={data} options={options} />
      </div>
      <LegendItems legend={data.labels} />
    </>
  );
}
