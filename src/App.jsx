import { Route, Routes } from "react-router-dom";
import { Clases } from "./pages/Clases";
import { Retos } from "./pages/Retos";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Clases />} />
        <Route path="/retos" element={<Retos />} />
      </Routes>
    </>
  );
}

export default App;
