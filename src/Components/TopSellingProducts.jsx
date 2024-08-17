import React from "react";
import { Button, Icon, Segment } from "semantic-ui-react";
import TableComponent from "./TableComponent";

const tableItems = [
  {
    id: 1,
    name: "The Great Gatsby",
    price: "$10.99",
    category: "Classic Literature",
    quantity: 50,
    amount: "$549.50",
    inStock: "In Stock",
  },
  {
    id: 2,
    name: "1984",
    price: "$8.99",
    category: "Dystopian Fiction",
    quantity: 75,
    amount: "$674.25",
    inStock: "In Stock",
  },
  {
    id: 3,
    name: "To Kill a Mockingbird",
    price: "$7.99",
    category: "Historical Fiction",
    quantity: 60,
    amount: "$479.40",
    inStock: "Out Stock",
  },
  {
    id: 4,
    name: "The Catcher in the Rye",
    price: "$9.49",
    category: "Literary Fiction",
    quantity: 40,
    amount: "$379.60",
    inStock: "In Stock",
  },
  {
    id: 5,
    name: "Pride and Prejudice",
    price: "$6.99",
    category: "Romance",
    quantity: 55,
    amount: "$384.45",
    inStock: "In Stock",
  },
  {
    id: 6,
    name: "The Hobbit",
    price: "$11.99",
    category: "Fantasy",
    quantity: 30,
    amount: "$359.70",
    inStock: "In Stock",
  },
];
const tableHeaders = [
  "Book Title",
  "Price",
  "Quantity",
  "Amount",
  "Status",
  "Action",
];

function TopSellingProducts() {
  return (
    <Segment
      className="segment_div"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "1rem",
          gap: "1rem",
        }}>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}>
          Top Selling Products
        </span>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}>
          <Button color="grey">
            <Icon name="filter" />
            <span>Filter</span>
          </Button>
          <Button color="blue">See All</Button>
        </div>
      </div>

      <TableComponent tableHeaders={tableHeaders} tableItems={tableItems} />
    </Segment>
  );
}

export default TopSellingProducts;
