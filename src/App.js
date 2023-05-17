import "./styles.css";
import Page1 from "./Page1.js";
import Page2 from "./Page2.js";
import Page3 from "./Page3.js";
import Colores from "./Colores.js";
import { Datos } from "./contextos/Contexto";

export default function App() {
  return (
    <>
      <Datos>
        <div className="App">
          <Page1 />
          <Page2 />
          <Page3 />
        </div>
        <Colores />
      </Datos>
    </>
  );
}
