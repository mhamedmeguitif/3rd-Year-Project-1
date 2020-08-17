import React, { useState, useContext } from "react";
import {
  Modal,
  Button,
  Icon,
  Radio,
  Message,
  TextArea,
  Form,
} from "semantic-ui-react";
import { useEffect } from "react";
import Axios from "axios";
import { UserContext } from "../../../Config__Global/UserContext";

const EvaluateModal = (props) => {
  // props
  const { action, data } = props;

  // states
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState("");
  const [motif, setMotif] = useState("");
  const [motifErr, setMotifErr] = useState(false);
  const [error, setError] = useState(false);

  const { user } = useContext(UserContext);

  // methods
  const handle_close = () => {
    setOpen(false);
    setError(false);
    setMotifErr(false);
    setMotif("");
    setChoice("");
  };
  const handle_priority = (e, { value }) => {
    setError(false);
    setChoice(value);
  };

  const choices =
    action === "accept"
      ? [
          { label: "Strong Accept", value: "sa", checked: choice === "sa" },
          { label: "Medium Accept", value: "ma", checked: choice === "ma" },
          { label: "Weak Accept", value: "wa", checked: choice === "wa" },
        ]
      : [
          { label: "Strong Reject", value: "sr", checked: choice === "sr" },
          { label: "Weak Reject", value: "wr", checked: choice === "wr" },
        ];

  const handle_validate = () => {
    if (choice === "" || motif.length < 10) {
      setError(true);
      if (motif.length < 10) {
        setMotifErr(true);
      }
    } else sendFeedback();
  };

  const sendFeedback = () => {
    Axios.create({
      post: {
        headers: {
          "Content-Type": "application/json",
          // Authorization : `Bearer ${user.token}`
        },
      },
    })
      .request({
        url: "http://127.0.0.1:5000/evaluation",
        method: "POST",
        data: {
          IdEvaluateur: data.eval,
          IdConference: data.conf,
          IdThemes: data.theme,
          IdArticle: data.article,
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setChoice("sa");
  }, []);

  return (
    <Modal
      className={
        error
          ? `_evaluate_modal error${action === "reject" ? " reject" : ""}`
          : `_evaluate_modal${action === "reject" ? " reject" : ""}`
      }
      trigger={
        <Button animated onClick={handle_close} className="_primary_btn">
          <Button.Content
            visible
            content={action === "accept" ? "Accept" : "Reject"}
          />
          <Button.Content hidden>
            <Icon name="checkmark" />
          </Button.Content>
        </Button>
      }
      open={open}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header style={{ textAlign: "center" }}>
        {action === "accept" ? "Accept Article" : "Reject Article"}
      </Modal.Header>
      <Modal.Content>
        <div
          className={`_evaluate_choices${action === "reject" ? " reject" : ""}`}
        >
          {choices.map((elm) => {
            return (
              <Radio
                label={elm.label}
                name="radioGroup"
                value={elm.value}
                checked={elm.checked}
                onChange={handle_priority}
              />
            );
          })}
        </div>
        <Form>
          <TextArea
            value={motif}
            className={motifErr ? "error" : ""}
            onChange={(e, { value }) => {
              setMotifErr(false);
              setError(false);
              setMotif(value);
            }}
            rows="4"
            placeholder="Feedback ..."
            style={{ width: "400px", resize: "none" }}
          />
        </Form>
        {error && <Message content="All fields are required" error />}
      </Modal.Content>
      <Modal.Actions
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <Button animated onClick={handle_validate} className="_primary_btn">
          <Button.Content visible content="Confirm" />
          <Button.Content hidden>
            <Icon name="checkmark" />
          </Button.Content>
        </Button>
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

export default EvaluateModal;
