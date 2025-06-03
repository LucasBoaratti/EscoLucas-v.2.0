import css from "./DeletarDisciplinaModal.module.css";
import axios from "axios";

export function DeletarDisciplinaModal({ openModal, closeModal, atualizarTabelaDisciplina }) {
    if (!openModal) {
        return null;
    }

    async function DeletarDisciplinaDELETE() {
        const token = localStorage.getItem("access_token");
        const id = localStorage.getItem("id");

        try {
            const response = await axios.delete(`http://127.0.0.1:8000/escolucas/disciplina/${id}/`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })

            alert("Disciplina deletada com sucesso!");

            closeModal();

            atualizarTabelaDisciplina();
        }
        catch(error) {
            console.error("Erro ao deletar disciplina: ", error);
        }
    }

    return (
        <div className={css.containerModal}>
            <div className={css.modal}>
                <h1>Tem certeza que deseja deletar essa disciplina?</h1>
                <div className={css.botoes}>
                    <button type="submit" onClick={DeletarDisciplinaDELETE}>Sim</button>
                    <button type="button" onClick={closeModal}>Não</button>
                </div>
            </div>
        </div>
    )
}