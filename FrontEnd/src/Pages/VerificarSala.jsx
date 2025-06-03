import css from "./VerificarSala.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function VerificarSala() {
    const [buscarNome, setBuscarNome] = useState([]);

    const nome = localStorage.getItem("nomeProfessor");

    const navigate = useNavigate();

    async function BuscarSala() {
        const token = localStorage.getItem("access_token");

        try {
            const response = await axios.get("http://127.0.0.1:8000/escolucas/reservaSalaProfessor/", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });

            setBuscarNome(response.data);
        }

        catch(error) {
            console.error("Erro ao buscar nome: ", error);
        }
    }

    return (
        <main className={css.container}>
            <div className={css.busca}>
                <h1>Verifique sua sala aqui, {nome}</h1>
                <div className={css.botao}>
                    <button type="button" onClick={BuscarSala}>Buscar</button>
                    <button type="button" className={css.botaoVoltar} onClick={() => navigate("/professor")}>Voltar</button>
                </div>        
            </div>
            <table className={css.tabela}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sala reservada</th>
                        <th>Data de início</th>
                        <th>Data de término</th>
                        <th>Período</th>
                        <th>Professor representante</th>
                        <th>Disciplina associada</th>
                    </tr>
                </thead>
                <tbody>
                    {buscarNome.length > 0 ? (
                        buscarNome.map((ambiente) => (
                            <tr key={ambiente.id}>
                                <td>{ambiente.id}</td>
                                <td>{ambiente.salaReservada}</td>
                                <td>{ambiente.dataInicio}</td>
                                <td>{ambiente.dataTermino}</td>
                                <td>{ambiente.periodo}</td>
                                <td>{ambiente.professorRepresentante}</td>
                                <td>{ambiente.disciplinaAssociada}</td>
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