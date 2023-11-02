import { useEffect, useState } from "react";
import "./App.css";
import LeftContainer from "./component/LeftContainer";
import RightContainer from "./component/RightContainer";

function App() {
  const [bill, setBill] = useState("");
  const [person, setPerson] = useState("");
  const [tip, setTip] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill > 0 && person > 0 && tip > 0) {
      const tipAmount = (bill * (tip / 100)) / person;
      setCalculatedTip(tipAmount);
      const totalAmount = bill / person + tipAmount;
      setTotal(totalAmount);
    }
  }, [bill, person, tip, calculatedTip]);

  const handleclick = (e) => {
    setBill("");
    setPerson("");
    setTip("");
    setCalculatedTip(0);
    setTotal(0);
  };

  return (
    <div className="app">
      <div className="title">
        SPLI
        <br />
        TTER
      </div>
      <div className="main_container">
        <LeftContainer
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          person={person}
          setPerson={setPerson}
        />
        <RightContainer
          calculatedTip={calculatedTip}
          total={total}
          handleclick={handleclick}
          person={person}
        />
      </div>
    </div>
  );
}

export default App;
