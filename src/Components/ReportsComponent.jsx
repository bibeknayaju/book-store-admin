import React from "react";
import { Segment, Header } from "semantic-ui-react";
import Chart from "./Chart";

// Sample data for charts
const lineChartData = [
  ["x", "January", "February", "March", "April", "May", "June"],
  ["Sales", 120, 150, 200, 180, 220, 300],
];
const barChartData = [
  ["x", "Fiction", "Non-Fiction", "Science", "History"],
  ["Sales", 500, 300, 200, 150],
];
const pieChartData = [
  ["data", "Mystery", "Romance", "Sci-Fi", "Biography"],
  ["Sales", 40, 25, 20, 15],
];

const ReportsComponent = () => {
  return (
    <Segment
      style={{
        marginLeft: "20px",
      }}>
      <Header as="h2">Sales Reports</Header>

      <div style={{ marginBottom: "2rem" }}>
        <Header as="h3">Monthly Sales Line Chart</Header>
        <Chart
          id="line-chart"
          data={lineChartData}
          categories={lineChartData[0].slice(1)}
          title="Monthly Sales"
          chartType="line"
          height={400}
          width={600}
          colors={["#FF5733"]}
        />
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <Header as="h3">Product Sales Bar Chart</Header>
        <Chart
          id="bar-chart"
          data={barChartData}
          categories={barChartData[0].slice(1)}
          title="Product Sales"
          chartType="bar"
          height={400}
          width={600}
          colors={["#33FF57"]}
        />
      </div>

      <div>
        <Header as="h3">Sales Distribution Pie Chart</Header>
        <Chart
          id="pie-chart"
          data={pieChartData}
          categories={pieChartData[0].slice(1)}
          title="Sales Distribution"
          chartType="donut"
          height={400}
          width={600}
          colors={["#3375FF", "#FF33A1", "#FFDB33"]}
        />
      </div>
    </Segment>
  );
};

export default ReportsComponent;
