import React from "react";
import { Segment } from "semantic-ui-react";
import TableComponent from "./TableComponent";

const recentDeliveries = [
  {
    id: 1,
    deliveryNumber: "DEL12345",
    customerName: "John Doe",
    deliveryDate: "2024-08-10",
    status: "Delivered",
  },
  {
    id: 2,
    deliveryNumber: "DEL12346",
    customerName: "Jane Smith",
    deliveryDate: "2024-08-09",
    status: "Pending",
  },
  {
    id: 3,
    deliveryNumber: "DEL12347",
    customerName: "Alice Johnson",
    deliveryDate: "2024-08-08",
    status: "Delivered",
  },
  {
    id: 4,
    deliveryNumber: "DEL12348",
    customerName: "Bob Brown",
    deliveryDate: "2024-08-07",
    status: "In Transit",
  },
  {
    id: 5,
    deliveryNumber: "DEL12349",
    customerName: "Carol White",
    deliveryDate: "2024-08-06",
    status: "Delivered",
  },
  {
    id: 6,
    deliveryNumber: "DEL12350",
    customerName: "David Wilson",
    deliveryDate: "2024-08-05",
    status: "Pending",
  },
  {
    id: 7,
    deliveryNumber: "DEL12351",
    customerName: "Emma Martinez",
    deliveryDate: "2024-08-04",
    status: "Delivered",
  },
  {
    id: 8,
    deliveryNumber: "DEL12352",
    customerName: "Frank Harris",
    deliveryDate: "2024-08-03",
    status: "In Transit",
  },
  {
    id: 9,
    deliveryNumber: "DEL12353",
    customerName: "Grace Lewis",
    deliveryDate: "2024-08-02",
    status: "Delivered",
  },
  {
    id: 10,
    deliveryNumber: "DEL12354",
    customerName: "Hannah Clark",
    deliveryDate: "2024-08-01",
    status: "Pending",
  },
  {
    id: 11,
    deliveryNumber: "DEL12355",
    customerName: "Isaac Young",
    deliveryDate: "2024-07-31",
    status: "Delivered",
  },
  {
    id: 12,
    deliveryNumber: "DEL12356",
    customerName: "Jack Anderson",
    deliveryDate: "2024-07-30",
    status: "In Transit",
  },
  {
    id: 13,
    deliveryNumber: "DEL12357",
    customerName: "Katherine Walker",
    deliveryDate: "2024-07-29",
    status: "Delivered",
  },
  {
    id: 14,
    deliveryNumber: "DEL12358",
    customerName: "Leo Scott",
    deliveryDate: "2024-07-28",
    status: "Pending",
  },
  {
    id: 15,
    deliveryNumber: "DEL12359",
    customerName: "Mia Hall",
    deliveryDate: "2024-07-27",
    status: "Delivered",
  },
];

function DeliveryComponent() {
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
          "Delivery Number",
          "Customer Name",
          "Delivery Date",
          "Status",
          "Action",
        ]}
        tableItems={recentDeliveries}
      />
    </Segment>
  );
}

export default DeliveryComponent;
