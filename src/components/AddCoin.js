import React from "react";
import { connect } from "react-redux";

import { addCoin } from "../actions";
import CoinModal from "./CoinModal";

const AddCoin = ({ addCoin }) => {
  return <CoinModal title="Add coin" submitAction={addCoin} />;
};

export default connect(
  null,
  { addCoin }
)(AddCoin);
