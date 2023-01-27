import { useContext } from "react";
import TitleContext from "./Context";
function NameShow({ detail }) {
  const { deletByid } = useContext(TitleContext);
  const deletehandler = () => {
    deletByid(detail.id);
  };
  return (
    <div>
      {detail.title} {detail.age}
      <button onClick={deletehandler}>delete</button>
    </div>
  );
}

export default NameShow;
