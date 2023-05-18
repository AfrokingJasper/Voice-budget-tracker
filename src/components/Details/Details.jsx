import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import "./styles.css";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);

  console.log(chartData);
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };
  return (
    <Card className={title === "Income" ? "income" : "expense"}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default Details;
