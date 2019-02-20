import React from "react";
import { Field, reduxForm } from "redux-form";

const CoinForm = ({ handleSubmit, reset }) => {
  const onSubmit = values => {
    handleSubmit(values);
    reset();
  };

  return (
    <div>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Coin</label>
          <Field
            name="symbol"
            component="input"
            type="text"
            placeholder="BTC"
          />
        </div>
        <div className="field">
          <label>Amount</label>
          <Field
            name="amount"
            component="input"
            type="number"
            placeholder="0.1"
            step="any"
          />
        </div>
        <button className="ui teal labeled icon button">
          <i className="plus icon" />
          Add coin
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "coinForm"
})(CoinForm);
