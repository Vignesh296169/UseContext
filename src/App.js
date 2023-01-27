import Form from "./Form";
import "./styles.css";
import NameEdit from "./NameEdit";

import { Provider } from "./Context";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Provider>
        <Form />
        <NameEdit />
      </Provider>
    </div>
  );
}
