import "./css/clases.css";
import { Contador } from "../components/Contador";
import { Calificaciones } from "../components/Calificaciones";
import { State } from "../components/State";
import Effects from "../components/Effects";
import { Reference } from "../components/Reference";

const Clases = () => {
  return (
    <>
      <h1 className="clases-title">Clases</h1>
      <Calificaciones />
      <Contador />
      <State />
      <Effects />
      <Reference />
    </>
  );
};

export { Clases };
