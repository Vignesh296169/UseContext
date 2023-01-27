import NameShow from "./NameShow";
import { useContext } from "react";

import TitleContext from "./Context";
function NameEdit() {
  const { init } = useContext(TitleContext);
  return (
    <>
      {init.map((detail) => (
        <NameShow key={detail.id} detail={detail} />
      ))}
    </>
  );
}
export default NameEdit;
