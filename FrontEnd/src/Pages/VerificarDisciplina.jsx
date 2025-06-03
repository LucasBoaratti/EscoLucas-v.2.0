import css from "./VerificarDisciplina.module.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function VerificarDisciplina() {
    const [buscarDisciplina, setBuscarNome] = useState([]);

    const nome = localStorage.getItem("nomeProfessor");

    const navigate = useNavigate();

    async function BuscarDisciplina() {
        const token = localStorage.getItem("access_token");

        try {
            const response = await axios.get("http://127.0.0.1:8000/escolucas/disciplinaProfessor/", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })

            setBuscarNome(response.data);
        }
        catch(error) {
            console.error("Erro ao buscar o nome do professor: ");
        }
    }

    return (
        <main className={css.container}>
            <div className={css.busca}>
                <h1>Verifique sua disciplina aqui, {nome}</h1>
                <div className={css.botao}>
                    <button type="button" onClick={BuscarDisciplina}>Buscar</button>
                    <button type="button" className={css.botaoVoltar} onClick={() => navigate("/professor")}>Voltar</button>
                </div>
            </div>        
            <table className={css.tabela}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Carga horária</th>
                        <th>Descrição</th>
                        <th>Professor responsável (ID)</th>                        
                    </tr>
                </thead>
                <tbody>
                    {buscarDisciplina.length > 0 ? (
                        buscarDisciplina.map((disciplina) => (
                            <tr key={disciplina.id}>
                                <td>{disciplina.id}</td>
                                <td>{disciplina.nome}</td>
                                <td>{disciplina.curso}</td>
                                <td>{disciplina.cargaHoraria}</td>
                                <td style={{ width:"500px" }}>{disciplina.descricao}</td>
                                <td>{disciplina.professorResponsavel}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>                                    
                            <td colSpan="7">Nenhum ambiente reservado com seu nome.</td>
                        </tr>
                    )}  
                </tbody>
            </table>
        </main>
    )
}