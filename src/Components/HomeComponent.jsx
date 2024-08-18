import React from "react";
import RowLayout from "./RowLayout";
import "c3/c3.css";
import Chart from "./Chart";
import TopSellingProducts from "./TopSellingProducts";
import MonthlyTarget from "./MonthlyTarget";
import { Grid } from "semantic-ui-react";
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
    chartId: "chart1",
    data: [["Revenue", 30, 200, 100, 400, 150, 250]],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    chartType: "bar",
    title: "Revenue",
    colors: ["#3498db"], // Custom color for the bar chart
  },
  {
    id: 2,
    chartId: "chart2",
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
    title: "Petal Length Distribution",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    chartType: "donut",
    colors: ["#e74c3c", "#2ecc71", "#f39c12"], // Custom colors for the donut chart
  },
];

function HomeComponent() {
  return (
    <div
      style={{
        background: "#f6f6f6",
      }}>
      <Grid
        className="grid_div"
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
          padding: "2rem",
          backgroundColor: "#f4f4f9",
        }}>
        <div
          className="home_chart_div"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            alignItems: "center",
          }}>
          {chartItems.map((item) => (
            <div
              key={item.id}
              style={{
                width: "100%",
                maxWidth: "680px",
                background: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "1.5rem",
                boxSizing: "border-box",
              }}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: "#333",
                }}>
                {item.title}
              </h3>
              <Chart
                id={item.chartId}
                data={item.data}
                categories={item.categories}
                chartType={item.chartType}
                width={635}
                height={420}
                colors={item.colors}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="home_table_chart_div"
        style={{
          padding: "1rem",
          gap: "1rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}>
        <TopSellingProducts />
        <MonthlyTarget />
      </div>

      <div
        style={{
          padding: "1rem",
        }}>
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
    </div>
  );
}

export default HomeComponent;
