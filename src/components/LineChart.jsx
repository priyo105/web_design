import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  // Modified data to create a zigzag pattern
  const data = [100, 120, 140, 130, 160, 150, 170, 180];

  const options = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    markers: {
      size: 4, // Adjust the size of the markers as per your preference
    },
    toolbar: {
      show: false, // Disable the toolbar (controls)
    },

    yaxis: {
      show: false,
      labels: {
        show: true,

        style: {
          fontSize: "10px",
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: data,
      color: "#ffd027", // Set line color to yellow
    },
  ];

  return (
    <div>
      <p className="normal_small_text common_margin">Visit Statistics</p>
      <Chart options={options} series={series} type="line" height={160} />
    </div>
  );
};

export default LineChart;
