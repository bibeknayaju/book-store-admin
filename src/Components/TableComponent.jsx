import React from "react";
import { Table } from "semantic-ui-react";
import DropDownComponent from "./DropDownComponent";

function TableComponent({ tableHeaders, tableItems }) {
  // Define a map to associate header names with data properties
  const headerToPropertyMap = {
    "Book Title": "name",
    Price: "price",
    Quantity: "quantity",
    Amount: "amount",
    Rating: "rating",
    "In Stock": "inStock",
    Name: "name",
    Email: "email",
    Phone: "phone",
    Address: "address",
    City: "city",
    State: "state",
    Company: "company",
    Zipcode: "zipcode",
    "Order Number": "orderNumber",
    "Customer Name": "customerName",
    "Order Date": "orderDate",
    "Total Amount": "totalAmount",
    "Delivery Number": "deliveryNumber",
    "Delivery Date": "deliveryDate",
  };

  console.log("Table Headers:", tableHeaders);
  console.log("Table Items:", tableItems);
  console.log("Header to Property Map:", headerToPropertyMap);

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
              // Handle "Action" header separately
              if (header === "Action") {
                return (
                  <Table.Cell key={header}>
                    <DropDownComponent
                      description1={"ctrl + E"}
                      description2={"ctrl + D"}
                      item1={"Edit"}
                      item2={"Delete"}
                      title={"Actions"}
                    />
                  </Table.Cell>
                );
              }
              // Map headers to properties
              const property = headerToPropertyMap[header];
              console.log(
                `Header: ${header}, Property: ${property}, Value: ${item[property]}`
              );
              // Render the appropriate item property or empty if property does not exist
              return (
                <Table.Cell key={header}>
                  {property ? item[property] || "-" : "-"}
                </Table.Cell>
              );
            })}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default TableComponent;
