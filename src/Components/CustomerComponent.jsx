import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import {
  Placeholder,
  PlaceholderHeader,
  PlaceholderLine,
  PlaceholderParagraph,
  Segment,
} from "semantic-ui-react";
import PlaceHolder from "./PlaceHolder";

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
  const [loading, setLoading] = useState(false);

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
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          setLoading(false);
          throw new Error("Something went wrong while fetching customers");
        }
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error fetching customers: ", error);
      }
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
      {loading && (
        <Placeholder
          style={{
            width: "100%",
          }}>
          <PlaceholderHeader>
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine length="short" />

            <PlaceholderLine />
          </PlaceholderHeader>
          <PlaceholderParagraph>
            <PlaceholderLine length="medium" />
            <PlaceholderLine length="short" />
          </PlaceholderParagraph>
        </Placeholder>
      )}
      <TableComponent tableHeaders={tableHeaders} tableItems={tableItems} />
    </Segment>
  );
}

export default CustomerComponent;
