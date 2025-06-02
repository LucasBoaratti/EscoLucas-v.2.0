import { useEffect, useState } from "react";
import css from "./DisciplinaCRUD.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DeletarDisciplinaModal } from "../Components/DeletarDisciplinaModal";

export function DisciplinaCRUD() {
    const [disciplina, setDisciplina] = useState([]);
    const [deletarDisciplina, setDeletarDisciplina] = useState(false);

    const navigate = useNavigate();

    const token = localStorage.getItem("access_token");

    async function ObterDisciplinas() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/escolucas/disciplina/", {
                headers: {
                    "Authorization": `Bearer ${token}`, 
                }
            });

            setDisciplina(response.data);
        }
        catch(error) {
            console.error("Erro ao ver disciplina: ", error);
        }
    }

    useEffect(() => {
        if (!token) {
            console.log("Token não encontrado.");
            return;
        }

        ObterDisciplinas();
    }, [])
    
    return (
        <main className={css.container}>
            <h1>Conheça as disciplinas existentes na EscoLucas</h1>
            <div className={css.botoes}>
                <button type="button" className={css.botaoCriar} onClick={() => navigate("/criarDisciplina")}>
                    <i class="bi bi-plus-lg"></i>
                    <p>Adicionar disciplina</p>
                </button>
                <button type="button" onClick={() => navigate("/gestor")} className={css.botaoVoltar}>
                    <i class="bi bi-arrow-left"></i>
                    <p>Voltar</p>
                </button>
            </div>
            <table className={css.tabelaDisciplinas}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Carga horária</th>
                        <th>Descrição</th>
                        <th>Professor Responsável (ID)</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {disciplina.map((disciplina) => (
                    <tr key={disciplina.id}>
                        <td>{disciplina.id}</td>
                        <td>{disciplina.nome}</td>
                        <td>{disciplina.curso}</td>
                        <td>{disciplina.cargaHoraria}</td>
                        <td>{disciplina.descricao}</td>
                        <td>{disciplina.professorResponsavel}</td>
                        <td>
                            <i class="bi bi-pencil-square" style={{cursor:"pointer"}} onClick={() => {
                                localStorage.setItem("id", disciplina.id);
                                navigate("/editarDisciplina");
                            }}>
                                
                            </i>
                            <i class="bi bi-trash" style={{cursor:"pointer"}} onClick={() => {
                                localStorage.setItem("id", disciplina.id);
                                setDeletarDisciplina(true);
                            }}>
                            </i>
                            <DeletarDisciplinaModal openModal={deletarDisciplina} closeModal={() => 
                                setDeletarDisciplina(false)}
                                atualizarTabelaDisciplina={ObterDisciplinas}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>    
        </main>
    )
}