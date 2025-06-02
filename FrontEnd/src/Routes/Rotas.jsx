import { Routes, Route } from "react-router-dom";
import { Index } from "../Pages/Index";
import { Conteudo } from "../Components/Conteudo";
import { Login } from "../Pages/Login";
import { Gestor_Endpoints } from "../Pages/Gestor_Endpoints";
import { Professor_Endpoints } from "../Pages/Professor_Endpoints";
import { ProfessorCRUD } from "../Pages/ProfessorCRUD";
import { CriarProfessor } from "../Pages/CriarProfessor";
import { EditarProfessor } from "../Pages/EditarProfessor";
import { DisciplinaCRUD } from "../Pages/DisciplinaCRUD";
import { CriarDisciplina } from "../Pages/CriarDisciplina";
import { EditarDisciplina } from "../Pages/EditarDisciplina";
import { AmbienteCRUD } from "../Pages/AmbienteCRUD";
import { CriarAmbiente } from "../Pages/CriarAmbiente";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>

            <Route path="/inicial" element={<Index/>}>
                <Route index element={<Conteudo/>}/>
            </Route>

            <Route path="/professor" element={<Index/>}>
                <Route index element={<Professor_Endpoints/>}/>
            </Route>

            <Route path="/gestor" element={<Index/>}>
                <Route index element={<Gestor_Endpoints/>}/>
            </Route>

            <Route path="/professorCRUD" element={<Index/>}>
                <Route index element={<ProfessorCRUD/>}/>
            </Route>

            <Route path="/criarProfessor" element={<Index/>}>
                <Route index element={<CriarProfessor/>}/>
            </Route>

            <Route path="/editarProfessor" element={<Index/>}>
                <Route index element={<EditarProfessor/>}/>
            </Route>

            <Route path="/disciplinaCRUD" element={<Index/>}>
                <Route index element={<DisciplinaCRUD/>}/>
            </Route>

            <Route path="/criarDisciplina" element={<Index/>}>
                <Route index element={<CriarDisciplina/>}/>
            </Route>

            <Route path="/editarDisciplina" element={<Index/>}>
                <Route index element={<EditarDisciplina/>}/>
            </Route>

            <Route path="/ambienteCRUD" element={<Index/>}>
                <Route index element={<AmbienteCRUD/>}/>
            </Route>

            <Route path="/criarAmbiente" element={<Index/>}>
                <Route index element={<CriarAmbiente/>}/>
            </Route>
        </Routes>
    )
}