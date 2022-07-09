import { Route, Routes } from "react-router-dom";
import { Design } from "../pages/Design";
import { Ferramentas } from "../pages/Ferramentas";
import { Framework } from "../pages/Framework";
import Home from "../pages/Home";
import { Ldp } from "../pages/Ldp";
import { So } from "../pages/So";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Linguagens-de-Programacao" element={<Ldp/>} />
            <Route path="/Framework" element={<Framework/>} />
            <Route path="/Ferramentas" element={<Ferramentas/>} />
            <Route path="/Sistemas-Operacionais" element={<So/>} />
            <Route path="/Design" element={<Design/>} />

        </Routes>
    )
}