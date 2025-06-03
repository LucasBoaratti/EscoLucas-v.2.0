import axios from "axios";
import css from "./DeletarAmbienteModal.module.css";

export function DeletarAmbienteModal({ openModal, closeModal, atualizarTabelaAmbiente }) {
    if(!openModal) {
        return null;
    }

    async function DeletarAmbienteDELETE() {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("access_token");

        try {
            const response = await axios.delete(`http://127.0.0.1:8000/escolucas/ambiente/${id}/`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })

            alert("Ambiente deletado com sucesso!");

            closeModal();

            atualizarTabelaAmbiente();
        }
        catch(error) {
            console.error("Erro ao deletar ambiente: ", error);
        }
    }

    return (
        <div className={css.container}>
            <div className={css.modal}>
                <h1>Tem certeza que deseja deletar esse ambiente?</h1>
                <div className={css.botoes}>
                    <button type="submit" onClick={DeletarAmbienteDELETE}>Sim</button>
                    <button type="button" onClick={closeModal}>Não</button>
                </div>
            </div>
        </div>
    )
}