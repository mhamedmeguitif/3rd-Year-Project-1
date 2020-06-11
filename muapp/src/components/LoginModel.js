import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Checkbox,
} from "semantic-ui-react";
import LoginFroms from "./LoginFroms";


const ModalModalExample = () => (
  <Modal
    trigger={<Button className="test2">Sign-in</Button>}
    size="tiny"
    className="parent"
  >
    <Modal.Header className="ModelSignIn23">Sign-in</Modal.Header>
    <Modal.Content>
      <LoginFroms />
      
      <Modal.Description></Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;
