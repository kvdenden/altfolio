import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";

import history from "../history";
import CoinForm from "./CoinForm";
import Modal from "./Modal";

const CoinModal = ({ title, initialValues, submitAction, dispatch }) => {
  const dismissModal = () => history.push("/");
  const submitAndDismiss = values => {
    submitAction(values);
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
