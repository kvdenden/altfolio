import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { submit } from "redux-form";

import history from "../history";
import { addCoin } from "../actions";
import CoinForm from "./CoinForm";
import Modal from "./Modal";

const AddCoin = ({ addCoin, submitForm }) => {
  const dismissModal = () => history.push("/");
  const submitFormAndDismiss = () => {
    submitForm();
    dismissModal();
  };
  const addCoinAndDismiss = coin => {
    addCoin(coin);
    dismissModal();
  };

  const coinForm = <CoinForm onSubmit={addCoinAndDismiss} />;
  const actions = (
    <>
      <button onClick={submitFormAndDismiss} className="ui button primary">
        Add Coin
      </button>
      <button onClick={dismissModal} className="ui button">
        Cancel
      </button>
    </>
  );

  return (
    <Modal
      title="Add coin"
      content={coinForm}
      actions={actions}
      onDismiss={dismissModal}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(
      {
        addCoin,
        submitForm: () => submit("coinForm")
      },
      dispatch
    )
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCoin);
