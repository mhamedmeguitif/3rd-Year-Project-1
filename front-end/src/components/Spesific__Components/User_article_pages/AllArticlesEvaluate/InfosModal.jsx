import React, { useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";

// components
import Evaluate from "./EvaluateModal.jsx";

// css
import "./InfosModal.css";

const InfosModal = (props) => {
  // props
  const { trigger, data, fields } = props;

  // states
  const [open, setOpen] = useState(false);

  const handle_close = () => {
    setOpen(false);
  };

  return (
    <Modal
      closeIcon
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      className="_infos_modal"
    >
      <Modal.Header style={{ textAlign: "center" }}>
        Article Details
      </Modal.Header>
      <Modal.Content className="_modal_content">
        <div className="_names">
          {fields.map((elm) => {
            return <p>{elm.text}</p>;
          })}
        </div>
        <div className="_data">
          {fields.map((elm) => {
            return <p>{data[elm.field]}</p>;
          })}
        </div>
      </Modal.Content>
      <Modal.Actions
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <Evaluate
          action="accept"
          data={{
            conf: data.conf,
            eval: data.eval,
            theme: data.theme,
            article: data.article,
          }}
        />
        <Evaluate
          action="reject"
          data={{
            conf: data.conf,
            eval: data.eval,
            theme: data.theme,
            article: data.article,
          }}
        />
        <Button animated onClick={handle_close} className="_secondary_btn">
          <Button.Content visible content="Cancel" />
          <Button.Content hidden>
            <Icon name="times" />
          </Button.Content>
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default InfosModal;
