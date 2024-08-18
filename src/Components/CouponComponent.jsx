import React, { useState } from "react";
import { Button, Table, Icon, Segment } from "semantic-ui-react";
import FormComponent from "./FormComponent";

const initialCoupons = [
  {
    id: 1,
    code: "COUPON1",
    discount: 10,
    startDate: "2024-08-20",
    endDate: "2024-08-25",
  },
  {
    id: 2,
    code: "COUPON2",
    discount: 15,
    startDate: "2024-08-22",
    endDate: "2024-08-27",
  },
];

function CouponComponent() {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setNewCoupon((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleAddCoupon = (e) => {
    e.preventDefault();
    const id = coupons.length + 1;
    setCoupons([...coupons, { ...newCoupon, id }]);
    setNewCoupon({
      code: "",
      discount: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleDeleteCoupon = (id) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id));
  };

  return (
    <Segment
      style={{
        marginLeft: "20px",

        color: "white",
      }}>
      <FormComponent
        onSubmitFunction={handleAddCoupon}
        buttonText="Add Coupon"
        fields={[
          {
            label: "Coupon Code",
            placeholder: "Enter coupon code",
            type: "text",
            value: newCoupon.code,
            onChange: handleInputChange,
            name: "code",
          },
          {
            label: "Discount (%)",
            placeholder: "Enter discount percentage",
            type: "number",
            value: newCoupon.discount,
            onChange: handleInputChange,
            name: "discount",
          },
          {
            label: "Start Date",
            placeholder: "Enter start date",
            type: "date",
            value: newCoupon.startDate,
            onChange: handleInputChange,
            name: "startDate",
          },
          {
            label: "End Date",
            placeholder: "Enter end date",
            type: "date",
            value: newCoupon.endDate,
            onChange: handleInputChange,
            name: "endDate",
          },
        ]}
      />

      <Table celled style={{ marginTop: "20px" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Coupon Code</Table.HeaderCell>
            <Table.HeaderCell>Discount (%)</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {coupons.map((coupon) => (
            <Table.Row key={coupon.id}>
              <Table.Cell>{coupon.code}</Table.Cell>
              <Table.Cell>{coupon.discount}%</Table.Cell>
              <Table.Cell>{coupon.startDate}</Table.Cell>
              <Table.Cell>{coupon.endDate}</Table.Cell>
              <Table.Cell>
                <Button
                  color="red"
                  icon
                  onClick={() => handleDeleteCoupon(coupon.id)}>
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

export default CouponComponent;
