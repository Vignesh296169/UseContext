import { createContext, useState } from "react";

const TitleContext = createContext();
function Provider(props) {
  const [init, setinit] = useState([]);

  const savehandler = (title, age) => {
    const response = [
      ...init,
      { title: title, age: age, id: Math.round(Math.random() * 999) }
    ];
    setinit(response);
  };
  const deletByid = (id) => {
    const response = init.filter((item) => {
      return item.id !== id;
    });
    setinit(response);
  };

  let valueToshare = {
    init,
    savehandler,
    deletByid
  };
  return (
    <TitleContext.Provider value={valueToshare}>
      {props.children}
    </TitleContext.Provider>
  );
}

export { Provider };
export default TitleContext;
