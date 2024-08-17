import React from "react";
import { Button, Form, FormField, Input } from "semantic-ui-react";

function FormComponent({
  onSubmitFunction,
  label1,
  label2,
  placeholder1,
  placeholder2,
  onValueChange1,
  onValueChange2,
  value1,
  value2,
  buttonText,
  label2Type,
  label1Type,
}) {
  return (
    <Form onSubmit={onSubmitFunction}>
      <FormField>
        <label>
          {label1} <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          type={label1Type}
          required
          value1={value1}
          onChange={onValueChange1}
          placeholder={placeholder1}
        />
      </FormField>
      <FormField>
        <label>
          {label2} <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          type={label2Type}
          value2={value2}
          onChange={onValueChange2}
          required
          placeholder={placeholder2}
        />
      </FormField>

      <Button type="submit">{buttonText}</Button>
    </Form>
  );
}

export default FormComponent;
