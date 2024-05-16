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
      type: "line" as "line",
      toolbar: {
        show: false
      }
    },
    colors: colors,
    stroke: {
      curve: 'smooth' as "smooth",
      width: 2,
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
    series: [{
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 16]
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36]
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82]
    }
  ]
  };