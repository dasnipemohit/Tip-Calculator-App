import React from "react";
import "../App.css";

const RightContainer = ({ calculatedTip, total, person, handleclick }) => {
  const returnCurrencyAmt = (amt) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);
  };

  return (
    <div className="container-2">
      <div className="container-2_div">
        <div className="price">
          <div className="small">
            Tip Amount
            <br />
            <small className="print">/Person</small>
          </div>
          <div className="large">
            {returnCurrencyAmt(`${calculatedTip ? calculatedTip : "0"}`)}
          </div>
        </div>
        <div className="price">
          <div className="small">
            Total <br />
            <small className="print">/Person</small>
          </div>
          <div className="large">
            {returnCurrencyAmt(`${total ? total : "0"}`)}
          </div>
        </div>
        <div className="buton-div">
          {total ? (
            <button className="btn" onClick={handleclick}>
              RESET
            </button>
          ) : (
            <button className="btn" disabled>
              RESET
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
