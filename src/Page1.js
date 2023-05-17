import { useContext } from "react";
import { Contexto } from "./contextos/Contexto";

export default function Page1() {
  const { color } = useContext(Contexto);
  return (
    <div className="hijo" style={{ background: color }}>
      Page 1
    </div>
  );
}
