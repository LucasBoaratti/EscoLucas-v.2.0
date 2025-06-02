import { useNavigate } from "react-router-dom";
import css from "./DeletarProfessorModal.module.css";
import axios from "axios";

export function DeletarProfessorModal({ openModal, closeModal, atualizarTabelaProfessores }) {
    if (!openModal) {
        return null;
    }

    const navigate = useNavigate();

    async function DeletarProfessorDELETE(e) {
        e.preventDefault();

        const token = localStorage.getItem("access_token");
        const id = localStorage.getItem("id");

        try {
            const response = axios.delete(`http://127.0.0.1:8000/escolucas/professor/${id}/`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })

            alert("Professor deletado com sucesso!");

            closeModal();

            atualizarTabelaProfessores();
        }
        catch(error) {
            console.error("Erro ao deletar professor: ", error);
        }
    }

    return (
        <div className={css.mainModal}>
            <div className={css.containerModal}>
                <h1>Tem certeza que deseja deletar esse professor?</h1>
                <div className={css.botoes}>
                    <button type="submit" onClick={DeletarProfessorDELETE}>Sim</button>
                    <button type="button" onClick={closeModal}>Não</button>
                </div>
            </div>
        </div>
    )
}