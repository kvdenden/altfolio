import React from "react";
import { connect } from "react-redux";

import { editCoin } from "../actions";
import CoinModal from "./CoinModal";

const EditCoin = ({ coin, editCoin }) => {
  return (
    <CoinModal
      title="Edit Coin"
      submitAction={values => editCoin(coin, values)}
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
  { editCoin }
)(EditCoin);
