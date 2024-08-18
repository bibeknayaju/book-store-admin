import React from "react";
import { Modal, Header, Icon, Button } from "semantic-ui-react";

function ModalComponent({ trigger, header, children, open, onClose, onOpen }) {
  return (
    <Modal
      closeIcon
      onClose={onClose}
      onOpen={onOpen}
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
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}

export default ModalComponent;
