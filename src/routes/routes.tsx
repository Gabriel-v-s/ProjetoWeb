import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "../components/Cadastro/cadastroPage";
import Login from "../components/Login/loginPage";
import Home from "../pages/Home";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;