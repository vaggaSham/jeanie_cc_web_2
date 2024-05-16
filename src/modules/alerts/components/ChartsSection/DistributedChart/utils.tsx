const colors = [
    "#ECC977",
    "#2B64AE",
    "#8A8A8A",
    "#2B64AE",
    "#2B64AE",
    "#2B64AE",
    "#2B64AE",
    "#2B64AE",
    "#2B64AE",
  ];
 export const chartOptions = {
    chart: {
      height: 300,
      type: "bar" as "bar",
      toolbar: {
        show: false
      }
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "20%",
        distributed: true,
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        style: {
          colors: colors,
          fontSize: "12px",
        },
      },
    },
    series: [
      {
        name: "Tasks Completed",
        data: [30, 40, 35, 50, 49, 60, 70, 85, 100],
      },
    ],
  };