import React, { useState } from "react";
import { Checkbox, Grid, Icon, Segment, Table } from "semantic-ui-react";
import RowLayout from "./RowLayout";
import DropDownComponent from "./DropDownComponent";
import Chart from "./Chart";
import ModalComponent from "./ModalComponent";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

const productItems = [
  {
    id: 1,
    title: "Total Books",
    total: "10,245",
    percentage: "18%",
    profit: "14%",
    description: "Total number of books available in the store's inventory.",
  },
  {
    id: 2,
    title: "Out of Stock Books",
    total: "120",
    percentage: "1.5%",
    loss: "2%",
    description: "Books that are currently out of stock.",
  },
  {
    id: 3,
    title: "New Releases",
    total: "980",
    percentage: "9%",
    profit: "8%",
    description: "New books added to the collection this month.",
  },
  {
    id: 4,
    title: "Best-Selling Books",
    total: "75",
    percentage: "22%",
    profit: "28%",
    description: "Books with the highest sales this month.",
  },
];

const tableItems = [
  {
    id: 1,
    name: "The Great Gatsby",
    price: "10.99",
    quantity: 150,
    amount: "$1,648.50",
    rating: 4.7,
    inStock: "In Stock",
  },
  {
    id: 2,
    name: "1984",
    price: "8.99",
    quantity: 200,
    amount: "$1,798.00",
    rating: 4.8,
    inStock: "In Stock",
  },
  {
    id: 3,
    name: "To Kill a Mockingbird",
    price: "7.99",
    category: "Historical Fiction",
    quantity: 180,
    amount: "$1,438.20",
    rating: 4.9,
    inStock: "Out Stock",
  },
  {
    id: 4,
    name: "The Catcher in the Rye",
    price: "9.49",
    category: "Literary Fiction",
    quantity: 120,
    amount: "$1,138.80",
    rating: 4.6,
    inStock: "In Stock",
    author: "J.D. Salinger",
  },
  {
    id: 5,
    name: "Pride and Prejudice",
    price: "6.99",
    category: "Romance",
    quantity: 140,
    amount: "$978.60",
    rating: 4.5,
    inStock: "In Stock",
    author: "Jane Austen",
  },
  {
    id: 6,
    name: "The Hobbit",
    price: "11.99",
    category: "Fantasy",
    quantity: 90,
    amount: "$1,079.10",
    rating: 4.8,
    inStock: "In Stock",
    author: "J.R.R. Tolkien",
  },
  {
    id: 7,
    name: "The Alchemist",
    price: "12.99",
    category: "Adventure",
    quantity: 100,
    amount: "$1,299.00",
    rating: 4.9,
    inStock: "In Stock",
  },
  {
    id: 8,
    name: "The Da Vinci Code",
    price: "14.99",
    category: "Mystery",
    quantity: 80,
    amount: "$1,199.20",
    rating: 4.7,
    inStock: "In Stock",
  },
];

const chartItems = [
  {
    id: 1,
    chartId: "chart1", // Unique ID for the first chart
    data: [["Revenue", 30, 200, 100, 400, 150, 250]],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    chartType: "area-spline",
    title: "Revenue",
  },
];

const tableHeaders = [
  "Book Title",
  "Price",
  "Quantity",
  "Amount",
  "Rating",
  "In Stock",
  "Action",
];

function ProductComponent() {
  const [bookTitle, setBookTitle] = useState("");
  const [price, setPrice] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddBook = () => {
    tableItems.push({
      id: tableItems.length + 1,
      name: bookTitle,
      price: price,
      category: "Fiction",
      quantity: 50,
      amount: "$499.50",
      rating: 4.5,
      inStock: "In Stock",
    });
    setOpen(false);
  };
  return (
    <div
      style={{
        background: "#F6F6F6",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
        }}>
        <ModalComponent
          trigger={
            <Icon
              style={{
                fontSize: "1.5rem",
                color: "#6943BE",
                cursor: "pointer",
              }}
              name="plus"
            />
          }
          setOpen={setOpen}
          open={open}
          content={"Add a new book to the store's inventory."}
          header={"Add Book"}>
          <Segment>
            <FormComponent
              buttonText={"Add Book"}
              label1={"Book Title"}
              label2={"Price"}
              onSubmitFunction={handleAddBook}
              onValueChange1={(e) => setBookTitle(e.target.value)}
              onValueChange2={(e) => setPrice(e.target.value)}
              placeholder1={"Enter book title"}
              placeholder2={"Enter price"}
              value1={bookTitle}
              value2={price}
              label2Type={"number"}
              label1Type={"text"}
            />
          </Segment>
        </ModalComponent>
      </div>
      <Grid
        style={{
          padding: "1rem",
          margin: "0.5rem",
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(4, 1fr)", // Ensures equal width for each column
        }}>
        {productItems.map((item) => (
          <RowLayout
            key={item.id}
            title={item.title}
            total={item.total}
            percentage={item.percentage}
            percentageColor={item.percentageColor}
            icon={item.icon}
            profit={item.profit}
          />
        ))}
      </Grid>{" "}
      <Segment
        style={{
          display: "flex",
        }}>
        <div>
          <TableComponent tableHeaders={tableHeaders} tableItems={tableItems} />
        </div>

        <div>
          {chartItems.map((item) => (
            <Chart
              key={item.id}
              id={item.chartId}
              data={item.data}
              categories={item.categories}
              title={item.title}
              chartType={item.chartType}
              width={635}
              height={420}
            />
          ))}
        </div>
      </Segment>
    </div>
  );
}

export default ProductComponent;
