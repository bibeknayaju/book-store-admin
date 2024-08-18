import React, { useState } from "react";
import { Button, Table, Icon, Segment } from "semantic-ui-react";
import FormComponent from "./FormComponent";

const initialSales = [
  {
    id: 1,
    product: "Product 1",
    discount: 20,
    startDate: "2024-08-20",
    endDate: "2024-08-25",
  },
  {
    id: 2,
    product: "Product 2",
    discount: 15,
    startDate: "2024-08-22",
    endDate: "2024-08-27",
  },
];

function FlashSalesComponent() {
  const [sales, setSales] = useState(initialSales);
  const [newSale, setNewSale] = useState({
    product: "",
    discount: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setNewSale((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleAddSale = (e) => {
    e.preventDefault();
    const id = sales.length + 1;
    setSales([...sales, { ...newSale, id }]);
    setNewSale({
      product: "",
      discount: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleDeleteSale = (id) => {
    setSales(sales.filter((sale) => sale.id !== id));
  };

  return (
    <Segment
      style={{
        color: "white",
        marginLeft: "20px",
      }}>
      <FormComponent
        onSubmitFunction={handleAddSale}
        buttonText="Add Sale"
        fields={[
          {
            label: "Product Name",
            placeholder: "Enter product name",
            type: "text",
            value: newSale.product,
            onChange: handleInputChange,
            name: "product",
          },
          {
            label: "Discount (%)",
            placeholder: "Enter discount percentage",
            type: "number",
            value: newSale.discount,
            onChange: handleInputChange,
            name: "discount",
          },
          {
            label: "Start Date",
            placeholder: "Enter start date",
            type: "date",
            value: newSale.startDate,
            onChange: handleInputChange,
            name: "startDate",
          },
          {
            label: "End Date",
            placeholder: "Enter end date",
            type: "date",
            value: newSale.endDate,
            onChange: handleInputChange,
            name: "endDate",
          },
        ]}
      />

      <Table celled style={{ marginTop: "20px" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Discount (%)</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sales.map((sale) => (
            <Table.Row key={sale.id}>
              <Table.Cell>{sale.product}</Table.Cell>
              <Table.Cell>{sale.discount}%</Table.Cell>
              <Table.Cell>{sale.startDate}</Table.Cell>
              <Table.Cell>{sale.endDate}</Table.Cell>
              <Table.Cell>
                <Button
                  color="red"
                  icon
                  onClick={() => handleDeleteSale(sale.id)}>
                  <Icon name="delete" />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );
}

export default FlashSalesComponent;
