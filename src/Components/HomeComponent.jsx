import React from "react";
import RowLayout from "./RowLayout";
import "c3/c3.css";
import Chart from "./Chart";
import TopSellingProducts from "./TopSellingProducts";
import MonthlyTarget from "./MonthlyTarget";
import { Flag, Grid } from "semantic-ui-react";
import TableComponent from "./TableComponent";
import { userData } from "../data";

const items = [
  {
    id: 1,
    title: "Total Revenue",
    total: "$34,874.93",
    percentage: "14%",
    profit: "10%",
  },
  {
    id: 2,
    title: "Total Order",
    total: "821",
    percentage: "5%",
    loss: "5%",
  },
  {
    id: 3,
    title: "Total Users",
    total: "7281",
    percentage: "10%",
    profit: "10%",
  },
  {
    id: 4,
    title: "Total Products",
    total: "1,000",
    percentage: "10%",
    loss: "10%",
  },
];

const chartItems = [
  {
    id: 1,
    chartId: "chart1", // Unique ID for the first chart
    data: [["Revenue", 30, 200, 100, 400, 150, 250]],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    chartType: "bar",
    title: "Revenue",
  },
  {
    id: 2,
    chartId: "chart2", // Unique ID for the second chart
    data: [
      [
        "setosa",
        0.2,
        0.2,
        0.2,
        0.2,
        0.2,
        0.4,
        0.3,
        0.2,
        0.2,
        0.1,
        0.2,
        0.2,
        0.1,
        0.1,
        0.2,
        0.4,
        0.4,
        0.3,
        0.3,
        0.3,
        0.2,
        0.4,
        0.2,
        0.5,
        0.2,
        0.2,
        0.4,
        0.2,
        0.2,
        0.2,
        0.2,
        0.4,
        0.1,
        0.2,
        0.2,
        0.2,
        0.2,
        0.1,
        0.2,
        0.2,
        0.3,
        0.3,
        0.2,
        0.6,
        0.4,
        0.3,
        0.2,
        0.2,
        0.2,
        0.2,
      ],
      [
        "versicolor",
        1.4,
        1.5,
        1.5,
        1.3,
        1.5,
        1.3,
        1.6,
        1.0,
        1.3,
        1.4,
        1.0,
        1.5,
        1.0,
        1.4,
        1.3,
        1.4,
        1.5,
        1.0,
        1.5,
        1.1,
        1.8,
        1.3,
        1.5,
        1.2,
        1.3,
        1.4,
        1.4,
        1.7,
        1.5,
        1.0,
        1.1,
        1.0,
        1.2,
        1.6,
        1.5,
        1.6,
        1.5,
        1.3,
        1.3,
        1.3,
        1.2,
        1.4,
        1.2,
        1.0,
        1.3,
        1.2,
        1.3,
        1.3,
        1.1,
        1.3,
      ],
      [
        "virginica",
        2.5,
        1.9,
        2.1,
        1.8,
        2.2,
        2.1,
        1.7,
        1.8,
        1.8,
        2.5,
        2.0,
        1.9,
        2.1,
        2.0,
        2.4,
        2.3,
        1.8,
        2.2,
        2.3,
        1.5,
        2.3,
        2.0,
        2.0,
        1.8,
        2.1,
        1.8,
        1.8,
        1.8,
        2.1,
        1.6,
        1.9,
        2.0,
        2.2,
        1.5,
        1.4,
        2.3,
        2.4,
        1.8,
        1.8,
        2.1,
        2.4,
        2.3,
        1.9,
        2.3,
        2.5,
        2.3,
        1.9,
        2.0,
        2.3,
        1.8,
      ],
    ],
    title: "Demo Chart",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    chartType: "donut",
  },
];

function HomeComponent() {
  return (
    <div
      style={{
        background: "#F6F6F6",
      }}>
      <Grid
        style={{
          padding: "1rem",
          margin: "0.5rem",
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(4, 1fr)", // Ensures equal width for each column
        }}>
        {items.map((item) => (
          <RowLayout
            key={item.id}
            title={item.title}
            total={item.total}
            percentage={item.percentage}
            percentageColor={item.percentageColor}
            icon={item.icon}
            profit={item.profit}
          />
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "",
          gap: "1rem",
          margin: "1rem",
          borderRadius: "5px",
        }}>
        {chartItems.map((item) => (
          <Chart
            key={item.id}
            id={item.chartId}
            data={item.data}
            categories={item.categories}
            width={635}
            height={420}
            chartType={item.chartType}
          />
        ))}
      </div>

      <div
        style={{
          padding: "1rem",
          gap: "1rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          backgroundColor: "#fff",
        }}>
        <TopSellingProducts />
        <MonthlyTarget />
      </div>

      <TableComponent
        tableHeaders={[
          "Joined At",
          "Image",
          "Name",
          "Country",
          "Email",
          "Phone",
          "Payment Method",
          "Joined At",
        ]}
        tableItems={userData}
      />
    </div>
  );
}

export default HomeComponent;
