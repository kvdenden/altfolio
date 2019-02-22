import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { submit } from "redux-form";

import history from "../history";
import { addCoin } from "../actions";
import CoinForm from "./CoinForm";
import Modal from "./Modal";

const CoinModal = ({ title, addCoin, submitForm }) => {
  const dismissModal = () => history.push("/");
  const addCoinAndDismiss = coin => {
    addCoin(coin);
    dismissModal();
  };

  const coinForm = <CoinForm onSubmit={addCoinAndDismiss} />;
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

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({
      addCoin,
      submitForm: () => submit("coinForm")
    })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CoinModal);
