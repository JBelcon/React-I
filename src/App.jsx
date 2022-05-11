import { Route, Routes } from "react-router-dom";
import { Clases } from "./pages/Clases";
import { Retos } from "./pages/Retos";
import { Header } from "./components/Header";
import { Context } from "./components/context/Context";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Clases />} />
        <Route path="/retos" element={<Retos />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </>
  );
}

export default App;
