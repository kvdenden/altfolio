import React from "react";

const CoinForm = () => {
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Coin</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Amount</label>
          <input type="number" />
        </div>
        <button className="ui teal labeled icon button">
          <i class="plus icon" />
          Add coin
        </button>
      </form>
    </div>
  );
};

export default CoinForm;
