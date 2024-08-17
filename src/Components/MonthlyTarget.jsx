import React from "react";
import { Grid, GridColumn, GridRow, Icon, Segment } from "semantic-ui-react";
import Chart from "./Chart";

function MonthlyTarget() {
  const chartData = {
    id: 1,
    chartId: "chart1",
    data: [["data", 70]],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    chartType: "gauge",
  };
  return (
    <Segment
      className="segment_div"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}>
        Monthly Target
      </span>
      <p>Target you've set for the month.</p>

      <div style={{}}>
        <Chart
          width={300}
          height={300}
          id="monthly-target"
          data={chartData.data}
          categories={[]}
          chartType="gauge"
        />
      </div>

      <Grid>
        <GridRow>
          <GridColumn width={8}>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <p
                style={{
                  margin: 0,
                }}>
                Target
              </p>
              <div>
                <span>$70,000</span>
                <Icon name="arrow up" color="green" />
              </div>
            </div>
          </GridColumn>
          <GridColumn width={8}>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <p
                style={{
                  margin: 0,
                }}>
                Target
              </p>
              <div>
                <span>$70,000</span>
                <Icon name="arrow up" color="green" />
              </div>
            </div>{" "}
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default MonthlyTarget;
