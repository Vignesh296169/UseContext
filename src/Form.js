import { useState, useContext } from "react";
import TitleContext from "./Context";

const Form = () => {
  const [enteredvalue, setvalue] = useState("");
  const [enteredage, setage] = useState("");
  const { savehandler } = useContext(TitleContext);
  const changehandler = (e) => {
    setvalue(e.target.value);
  };
  const ageChanger = (e) => {
    setage(e.target.value);
  };
  const submithandler = (e) => {
    e.preventDefault();
    savehandler(enteredvalue, +enteredage);
    setage("");
    setvalue("");
  };
  return (
    <form onSubmit={submithandler}>
      <input
        onChange={changehandler}
        value={enteredvalue}
        type="text"
        maxLength="6"
      />
      <br />
      <br />
      <input value={enteredage} onChange={ageChanger} type="number" max="80" />
      <button>Add</button>
    </form>
  );
};

export default Form;
