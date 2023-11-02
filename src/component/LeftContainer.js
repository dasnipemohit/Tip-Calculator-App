import React, { useState } from "react";
import "../App.css";

const LeftContainer = ({ bill, setBill, person, setPerson, tip, setTip }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setPerson(newValue);

    if (/^-?[1-9]\d*$/.test(newValue) && newValue > 0) {
      setError("");
      e.target.style.borderColor = "green";
    } else {
      setError("Can't be zero");
      e.target.style.borderColor = "red";
    }
  };

  const handleClickInput = (event) => {
    setTip(event.target.value);
  };

  return (
    <div className="container-1">
      <p className="cont">Bill</p>
      <div className="input-container">
        <label className="label">$</label>
        <input
          className="input-1"
          type="number"
          min={0}
          placeholder="0"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <p className="cont">Select Tip % </p>

      <div className="box">
        <label className={`box-4 ${tip === "5" ? "selected" : ""}`}>
          <input
            type="radio"
            name="tipPercentage"
            value="5"
            onChange={handleClickInput}
          />
          5%
        </label>
        <label className={`box-4 ${tip === "25" ? "selected" : " "}`}>
          <input
            type="radio"
            name="tipPercentage"
            value="25"
            onChange={handleClickInput}
          />
          25%
        </label>
        <label className={`box-4 ${tip === "10" ? "selected" : ""}`}>
          <input
            type="radio"
            name="tipPercentage"
            value="10"
            onChange={handleClickInput}
          />
          10%
        </label>
        <label className={`box-4 ${tip === "50" ? "selected" : ""}`}>
          <input
            type="radio"
            name="tipPercentage"
            value="50"
            onChange={handleClickInput}
          />
          50%
        </label>
        <label className={`box-4 ${tip === "15" ? "selected" : ""}`}>
          <input
            type="radio"
            name="tipPercentage"
            value="15"
            onChange={handleClickInput}
          />
          15%
        </label>
        <input
          type="number"
          className="box_1"
          min="0"
          max="100"
          placeholder="Custom"
          value={tip}
          onInput={handleClickInput}
        />
      </div>

      <div className="input-container">
        <div className="align">
          <p className="cont">Number of People</p>
          <p className="error">{error}</p>
        </div>
        <label className="label">
          <i className="fa fa-user" />
        </label>
        <input
          className="input_2"
          type="number"
          min={0}
          placeholder="0"
          value={person}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default LeftContainer;
