import React from "react";
import { Table } from "semantic-ui-react";
import DropDownComponent from "./DropDownComponent";

function TableComponent({ tableHeaders, tableItems }) {
  console.log(tableItems);
  return (
    <Table
      celled
      style={{
        color: "grey",
      }}>
      <Table.Header>
        <Table.Row>
          {tableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableItems.map((item) => (
          <Table.Row key={item.id}>
            {tableHeaders.map((header) => {
              let cellContent = "-";

              switch (header) {
                case "Book Title":
                  cellContent = item.name || "-";
                  break;
                case "Price":
                  cellContent = item.price || "-";
                  break;
                case "Quantity":
                  cellContent = item.quantity || "-";
                  break;
                case "Amount":
                  cellContent = item.amount || "-";
                  break;
                case "Rating":
                  cellContent = item.rating || "-";
                  break;
                case "In Stock":
                  cellContent = item.inStock ? "Yes" : "No";
                  break;
                case "Name":
                  cellContent = item.name || "-";
                  break;
                case "Email":
                  cellContent = item.email || "-";
                  break;
                case "Phone":
                  cellContent = item.phone || "-";
                  break;
                case "Address":
                  cellContent = item.address || "-";
                  break;
                case "City":
                  cellContent = item.city || "-";
                  break;
                case "State":
                  cellContent = item.state || "-";
                  break;
                case "Company":
                  cellContent = item.company || "-";
                  break;
                case "Zipcode":
                  cellContent = item.zipcode || "-";
                  break;
                case "Order Number":
                  cellContent = item.orderNumber || "-";
                  break;
                case "Customer Name":
                  cellContent = item.customerName || "-";
                  break;
                case "Order Date":
                  cellContent = item.orderDate || "-";
                  break;
                case "Total Amount":
                  cellContent = item.totalAmount || "-";
                  break;
                case "Delivery Number":
                  cellContent = item.deliveryNumber || "-";
                  break;
                case "Customer Name":
                  cellContent = item.customerName || "-";
                  break;
                case "Delivery Date":
                  cellContent = item.deliveryDate || "-";
                  break;
                case "Status":
                  cellContent = item.status || "-";
                  break;
                case "Action":
                  cellContent = (
                    <DropDownComponent
                      description1={"ctrl + E"}
                      description2={"ctrl + D"}
                      item1={"Edit"}
                      item2={"Delete"}
                      title={"Actions"}
                    />
                  );
                  break;
                default:
                  cellContent = "-";
              }

              return <Table.Cell key={header}>{cellContent}</Table.Cell>;
            })}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default TableComponent;
