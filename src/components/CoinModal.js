import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";

import history from "../history";
import CoinForm from "./CoinForm";
import Modal from "./Modal";

const CoinModal = ({
  title,
  initialValues,
  submitAction,
  extraButtons = {},
  dispatch
}) => {
  const dismissModal = () => history.push("/");
  const submitAndDismiss = values => {
    submitAction(values);
    dismissModal();
  };

  const performActionAndDismiss = action => {
    action();
    dismissModal();
  };

  const submitForm = () => dispatch(submit("coinForm"));

  const coinForm = (
    <CoinForm onSubmit={submitAndDismiss} initialValues={initialValues} />
  );
  const actions = (
    <>
      <button onClick={submitForm} className="ui button primary">
        {title}
      </button>
      {Object.entries(extraButtons).map(
        ([key, { text, action, className }]) => {
          return (
            <button
              key={key}
              onClick={() => performActionAndDismiss(action)}
              className={className}
            >
              {text}
            </button>
          );
        }
      )}
      <button onClick={dismissModal} className="ui button">
        Cancel
      </button>
    </>
  );

  return (
    <Modal
      title={title}
      content={coinForm}
      actions={actions}
      onDismiss={dismissModal}
    />
  );
};

export default connect()(CoinModal);
