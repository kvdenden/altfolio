import _ from "lodash";
import Chart from "chart.js";
import React, { useRef, useState, useEffect } from "react";

import { colors } from "../utils";

const chartData = (coins, cutoffPercentage) => {
  const totalValue = _.sumBy(coins, "value");
  const cutoffValue = cutoffPercentage * totalValue;

  const filteredCoins = _.filter(coins, coin => coin.value >= cutoffValue);
  const remainingValue = totalValue - _.sumBy(filteredCoins, "value");

  const labels =
    coins.length === filteredCoins.length
      ? coins.map(coin => coin.symbol)
      : [...filteredCoins.map(coin => coin.symbol), "Other"];

  const data =
    coins.length === filteredCoins.length
      ? coins.map(coin => coin.value)
      : [...filteredCoins.map(coin => coin.value), remainingValue];

  return {
    labels,
    datasets: [{ data, backgroundColor: colors }]
  };
};

const chartOptions = {
  animation: { animateRotate: false, animateScale: false },

  tooltips: {
    callbacks: {
      label: (item, data) => {
        const dataset = data.datasets[item.datasetIndex];
        const total = dataset.data.reduce((acc, cur) => acc + cur);

        const label = data.labels[item.index];
        const value = dataset.data[item.index];
        const percentage = ((100 * value) / total).toFixed(1);
        return `${label}: ${percentage}%`;
      }
    }
  }
};

const PieChart = ({ coins = [], cutoffPercentage = 0.05 }) => {
  const chartRef = useRef();
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.data = chartData(coins, cutoffPercentage);
      chart.update();
    } else {
      const ctx = chartRef.current.getContext("2d");
      setChart(
        new Chart(ctx, {
          type: "doughnut",
          data: chartData(coins, cutoffPercentage),
          options: chartOptions
        })
      );
    }
  }, [coins]);

  return <canvas ref={chartRef}> </canvas>;
};

export default PieChart;
