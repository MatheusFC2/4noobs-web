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
            <Route path="/linguagens-de-programacao" element={<Ldp/>} />
            <Route path="/frameworks" element={<Framework/>} />
            <Route path="/ferramentas" element={<Ferramentas/>} />
            <Route path="/sistemas-operacionais" element={<So/>} />
            <Route path="/design" element={<Design/>} />
        </Routes>
    )
}