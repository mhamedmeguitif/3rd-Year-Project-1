import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Checkbox,
} from "semantic-ui-react";
import RegisterForms from "./RegisterForms";

const ModalModalExample2 = () => (
  <Modal trigger={<Button className="test2">Sign-up</Button>} size="large">
    <Modal.Header> Sign-up</Modal.Header>
    <Modal.Content>
      <RegisterForms />
      <Modal.Description></Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalModalExample2;
