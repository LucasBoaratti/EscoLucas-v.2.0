import { useEffect, useState } from "react";
import css from "./AmbienteCRUD.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DeletarAmbienteModal } from "../Components/DeletarAmbienteModal";

export function AmbienteCRUD() {
    const [ambiente, setAmbiente] = useState([]);
    const [deletarAmbiente, setDeletarAmbiente] = useState(false);

    const navigate = useNavigate();

    const token = localStorage.getItem("access_token");

    async function ObterAmbientes() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/escolucas/ambiente/", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })

            setAmbiente(response.data);
        }
        catch(error) {
            console.error("Erro ao obter ambiente: ", error);
        }
    }

    useEffect(() => {
        if(!token) {
            console.log("Token não encontrado.");
            return;
        }

        ObterAmbientes();
    }, [])

    return (
        <main className={css.container}>
            <h1>Conheça os ambientes da EscoLucas</h1>
            <div className={css.botoes}>
                <button type="button" className={css.botaoCriar} onClick={() => navigate("/criarAmbiente")}>
                    <i class="bi bi-plus-lg"></i>
                    <p>Adicionar ambiente</p>
                </button>
                <button type="button" className={css.botaoVoltar} onClick={() => navigate("/gestor")}>
                    <i class="bi bi-arrow-left"></i>
                    <p>Voltar</p>
                </button>
            </div>
            <table className={css.tabelaAmbientes}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sala reservada</th>
                        <th>Data de Início</th>
                        <th>Data de Término</th>
                        <th>Período</th>
                        <th>Professor representante</th>
                        <th>Disciplina associada</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {ambiente.map(ambiente => (
                        <tr key={ambiente.id}>
                            <td>{ambiente.id}</td>
                            <td>{ambiente.salaReservada}</td>
                            <td>{ambiente.dataInicio}</td>
                            <td>{ambiente.dataTermino}</td>
                            <td>{ambiente.periodo}</td>
                            <td>{ambiente.professorRepresentante}</td>
                            <td>{ambiente.disciplinaAssociada}</td>
                            <td>
                                <i class="bi bi-pencil-square" style={{ cursor:"pointer" }} onClick={() => {
                                    localStorage.setItem("id", ambiente.id);
                                    navigate("/editarAmbiente");
                                }}>
                                </i>
                                <i class="bi bi-trash" style={{ cursor:"pointer"} } onClick={() => {
                                    localStorage.setItem("id", ambiente.id);
                                    setDeletarAmbiente(true);
                                }}>
                                </i>
                                <DeletarAmbienteModal openModal={deletarAmbiente} closeModal={() =>  
                                    setDeletarAmbiente(false)} 
                                    atualizarTabelaAmbiente={ObterAmbientes}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}