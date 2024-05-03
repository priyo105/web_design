import React from "react";
import Chart from "react-apexcharts";

const SimpleBarChart = () => {
  // Sample data
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    grid: {
      show: false, // disable all grids
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2000", "2001", "2002", "2003"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#888", // set label color to gray
          fontWeight: "bold", // make label text bold
        },
      },
    },
    yaxis: {
      labels: {
        show: false, // hide y-axis labels
      },
      grid: {
        show: false,
      },
    },
    colors: ["red"],
    fill: {
      colors: ["#ffd027"],
    },
    title: {
      text: "",
      align: "center",
    },
  };

  const series = [
    {
      name: "Value",
      data: [50, 30, 80, 60],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default SimpleBarChart;
