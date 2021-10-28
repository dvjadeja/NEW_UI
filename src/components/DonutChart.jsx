import React from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "donut",
    width: 300,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    offsetX: -15,
    offsetY: -13,
  },
  labels: ["Correct", "Incorrect", "Partially correct", "Partially correct"],
};

const DonutChart = () => {
  return (
    <Chart
      options={options}
      height={200}
      width={300}
      series={[44, 55, 13, 33]}
      type="donut"
    />
  );
};

export default DonutChart;
