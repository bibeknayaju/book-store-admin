import React from "react";
import { Button, Form, FormField, Input } from "semantic-ui-react";

function FormComponent({ onSubmitFunction, fields, buttonText }) {
  return (
    <Form onSubmit={onSubmitFunction}>
      {fields.map((field, index) => (
        <FormField key={index}>
          <label
            style={{
              fontSize: "0.9rem",
            }}>
            {field.label} <span style={{ color: "red" }}>*</span>
          </label>
          <Input
            type={field.type}
            value={field.value}
            onChange={(e) => field.onChange(e, field.name)}
            required
            placeholder={field.placeholder}
          />
        </FormField>
      ))}
      <Button type="submit">{buttonText}</Button>
    </Form>
  );
}

export default FormComponent;
