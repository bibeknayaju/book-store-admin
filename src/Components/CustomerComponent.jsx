import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import { Segment } from "semantic-ui-react";

const tableHeaders = [
  "Name",
  "Email",
  "Phone",
  "Address",
  "City",
  "Zipcode",
  "Company",
];

function CustomerComponent() {
  const [customers, setCustomers] = useState([]);

  const tableItems = customers.map((customer) => {
    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address.street,
      city: customer.address.city,
      zipcode: customer.address.zipcode,
      company: customer.company.name,
    };
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setCustomers(data);
    };

    fetchCustomers();
  }, []);
  return (
    <Segment
      style={{
        height: "100vh",
        borderRadius: "10px",
        padding: "20px",
      }}>
      {" "}
      <TableComponent tableHeaders={tableHeaders} tableItems={tableItems} />
    </Segment>
  );
}

export default CustomerComponent;
