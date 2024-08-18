import React from "react";
import { Segment } from "semantic-ui-react";
import TableComponent from "./TableComponent";

const recentOrders = [
  {
    id: 1,
    orderNumber: "ORD12345",
    customerName: "John Doe",
    orderDate: "2024-08-10",
    totalAmount: "$120.00",
  },
  {
    id: 2,
    orderNumber: "ORD12346",
    customerName: "Jane Smith",
    orderDate: "2024-08-09",
    totalAmount: "$150.50",
  },
  {
    id: 3,
    orderNumber: "ORD12347",
    customerName: "Alice Johnson",
    orderDate: "2024-08-08",
    totalAmount: "$95.75",
  },
  {
    id: 4,
    orderNumber: "ORD12348",
    customerName: "Bob Brown",
    orderDate: "2024-08-07",
    totalAmount: "$200.20",
  },
  {
    id: 5,
    orderNumber: "ORD12349",
    customerName: "Carol White",
    orderDate: "2024-08-06",
    totalAmount: "$135.40",
  },
  {
    id: 6,
    orderNumber: "ORD12350",
    customerName: "David Wilson",
    orderDate: "2024-08-05",
    totalAmount: "$80.10",
  },
  {
    id: 7,
    orderNumber: "ORD12351",
    customerName: "Emma Martinez",
    orderDate: "2024-08-04",
    totalAmount: "$220.00",
  },
  {
    id: 8,
    orderNumber: "ORD12352",
    customerName: "Frank Harris",
    orderDate: "2024-08-03",
    totalAmount: "$175.30",
  },
  {
    id: 9,
    orderNumber: "ORD12353",
    customerName: "Grace Lewis",
    orderDate: "2024-08-02",
    totalAmount: "$140.25",
  },
  {
    id: 10,
    orderNumber: "ORD12354",
    customerName: "Hannah Clark",
    orderDate: "2024-08-01",
    totalAmount: "$110.00",
  },
  {
    id: 11,
    orderNumber: "ORD12355",
    customerName: "Isaac Young",
    orderDate: "2024-07-31",
    totalAmount: "$125.90",
  },
  {
    id: 12,
    orderNumber: "ORD12356",
    customerName: "Jack Anderson",
    orderDate: "2024-07-30",
    totalAmount: "$160.75",
  },
  {
    id: 13,
    orderNumber: "ORD12357",
    customerName: "Katherine Walker",
    orderDate: "2024-07-29",
    totalAmount: "$145.60",
  },
  {
    id: 14,
    orderNumber: "ORD12358",
    customerName: "Leo Scott",
    orderDate: "2024-07-28",
    totalAmount: "$190.85",
  },
  {
    id: 15,
    orderNumber: "ORD12359",
    customerName: "Mia Hall",
    orderDate: "2024-07-27",
    totalAmount: "$205.40",
  },
];

function OrderComponent() {
  return (
    <Segment
      style={{
        marginLeft: "20px",
        height: "100vh",
        borderRadius: "10px",
        padding: "20px",
      }}>
      <TableComponent
        tableHeaders={[
          "Order Number",
          "Customer Name",
          "Order Date",
          "Total Amount",
          "Action",
        ]}
        tableItems={recentOrders}
      />
    </Segment>
  );
}

export default OrderComponent;
