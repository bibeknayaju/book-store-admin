import React from "react";
import { Dropdown, DropdownItem, DropdownMenu } from "semantic-ui-react";

function DropDownComponent({
  title,
  item1,
  item2,
  description1,
  description2,
}) {
  return (
    <Dropdown text={title}>
      <DropdownMenu>
        <DropdownItem text={item1} description={description1} />
        <DropdownItem text={item2} description={description2} />
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDownComponent;
