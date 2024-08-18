import React, { useEffect } from "react";
import c3 from "c3";
import "c3/c3.css";

function Chart({
  id,
  data,
  categories,
  title,
  chartType,
  height,
  width,
  colors = ["#6943BE"],
}) {
  useEffect(() => {
    // Create a chart
    const chart = c3.generate({
      bindto: `#${id}`, // Use unique ID for each chart
      size: {
        height, // The height of the chart
        width,
      },
      data: {
        columns: data,
        type: chartType, // The type of chart
        labels: {
          format: function (value) {
            return `$${value}`; // Add a dollar sign to the labels
          },
        },
      },
      donut: {
        title: title, // Add a title to the donut chart
      },

      bar: {
        width: {
          ratio: 0.5, // this makes the bar width 50% of the total width
        },
      },
      axis: {
        x: {
          type: "category",
          categories, // Custom labels for each data point
        },
      },
      color: {
        pattern: colors, // Custom color for the bars
      },
    });

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [data, categories, chartType, height, width, colors, id]);

  return (
    <div
      style={{
        borderRadius: "5px",
        background: "white",
        padding: "1rem",
      }}
      id={id}></div>
  );
}

export default Chart;
