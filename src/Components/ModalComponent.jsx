import React, { useState } from "react";
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
} from "semantic-ui-react";

function ModalComponent({ trigger, header, content, children, open, setOpen }) {
  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={trigger}>
      <Header icon>
        <Icon
          name="book"
          style={{
            fontSize: "1.7rem",
            color: "#6943BE",
          }}
        />
        {header}
      </Header>
      <ModalContent>{children}</ModalContent>
      <ModalActions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Add Book
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default ModalComponent;
