import React from "react";
import { Icon } from "semantic-ui-react";
import DropDownComponent from "./DropDownComponent";

function RowLayout({ title, total, percentage, icon, profit, loss }) {
  return (
    <div
      className="rowLayout_div"
      style={{
        height: "10rem",
        borderRadius: "0.5rem",
        backgroundColor: "white",
        display: "flex",
        alignItems: "start",
        padding: "1rem",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "1rem",
        }}>
        <div>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
            }}>
            {title}
          </span>
        </div>

        <div
          style={{
            cursor: "pointer",
          }}>
          <DropDownComponent
            description1={""}
            description2={""}
            item1={"Last 30 days"}
            item2={"Last 7 days"}
            title={"Last 30 days"}
          />
          {/* <Icon name={"ellipsis horizontal"} /> */}
        </div>
      </div>

      <div>
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}>
          {total}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
        }}>
        <span
          style={{
            background: profit ? " #E0FAEB" : "#FDF4F6",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            color: profit ? "green" : "red",
            borderRadius: "0.5rem",
          }}>
          {profit ? (
            <Icon name="arrow up" color="green" />
          ) : (
            <Icon name="arrow down" color="red" />
          )}
          {percentage}
        </span>

        <p>in the last 30 days</p>
      </div>
    </div>
  );
}

export default RowLayout;
