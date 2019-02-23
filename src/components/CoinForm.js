import React from "react";
import { Field, reduxForm } from "redux-form";

import CoinSelect from "./CoinSelect";

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
          <Field name="symbol" component={CoinSelect} />
        </div>
        <div className="field">
          <label>Amount</label>
          <Field
            name="amount"
            component="input"
            type="number"
            min="0"
            placeholder="0.1"
            step="any"
          />
        </div>
        <button className="ui transition hidden" />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "coinForm"
})(CoinForm);
