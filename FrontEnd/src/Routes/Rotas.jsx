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
import { EditarAmbiente } from "../Pages/EditarAmbiente";
import { VerificarSala } from "../Pages/VerificarSala";
import { VerificarDisciplina } from "../Pages/VerificarDisciplina";
import { Permissao } from "../Components/Permissao";

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
                <Route index element={<Permissao>
                    <Gestor_Endpoints/>
                </Permissao>}/>
            </Route>

            <Route path="/professorCRUD" element={<Index/>}>
                <Route index element={<Permissao>
                    <ProfessorCRUD/>
                </Permissao>}/>
            </Route>

            <Route path="/criarProfessor" element={<Index/>}>
                <Route index element={<Permissao>
                    <CriarProfessor/>
                </Permissao>}/>
            </Route>

            <Route path="/editarProfessor" element={<Index/>}>
                <Route index element={<Permissao>
                    <EditarProfessor/>
                </Permissao>}/>
            </Route>

            <Route path="/disciplinaCRUD" element={<Index/>}>
                <Route index element={<Permissao>
                    <DisciplinaCRUD/>
                </Permissao>}/>
            </Route>

            <Route path="/criarDisciplina" element={<Index/>}>
                <Route index element={<Permissao>
                    <CriarDisciplina/>
                </Permissao>}/>
            </Route>

            <Route path="/editarDisciplina" element={<Index/>}>
                <Route index element={<Permissao>
                    <EditarDisciplina/>
                </Permissao>}/>
            </Route>

            <Route path="/ambienteCRUD" element={<Index/>}>
                <Route index element={<Permissao>
                    <AmbienteCRUD/>
                </Permissao>}/>
            </Route>

            <Route path="/criarAmbiente" element={<Index/>}>
                <Route index element={<Permissao>
                    <CriarAmbiente/>
                </Permissao>}/>
            </Route>

            <Route path="/editarAmbiente" element={<Index/>}>
                <Route index element={<Permissao>
                    <EditarAmbiente/>
                </Permissao>}/>
            </Route>

            <Route path="/buscarSala" element={<Index/>}>
                <Route index element={<VerificarSala/>}/>
            </Route>

            <Route path="/buscarDisciplina" element={<Index/>}>
                <Route index element={<VerificarDisciplina/>}/>
            </Route>
        </Routes>
    )
}