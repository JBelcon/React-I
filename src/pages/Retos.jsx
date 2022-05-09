import "./css/retos.css";
import { Reto1 } from "../components/retos/reto1";
import { Reto2 } from "../components/retos/reto2";

const Retos = () => {
  return (
    <>
      <h1 className="retos-title">Retos</h1>
      <Reto1 />
      <Reto2 />
    </>
  );
};

export { Retos };
