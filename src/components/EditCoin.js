import React from "react";
import { connect } from "react-redux";

import { editCoin, removeCoin } from "../actions";
import CoinModal from "./CoinModal";

const EditCoin = ({ coin, editCoin, removeCoin }) => {
  const extraButtons = {
    remove: {
      text: "Remove Coin",
      action: () => removeCoin(coin),
      className: "ui basic negative button"
    }
  };
  return (
    <CoinModal
      title="Edit Coin"
      submitAction={values => editCoin(coin, values)}
      extraButtons={extraButtons}
      initialValues={coin}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const { symbol } = ownProps.match.params;
  const coin = state.portfolio[symbol];

  return { coin };
};

export default connect(
  mapStateToProps,
  { editCoin, removeCoin }
)(EditCoin);
