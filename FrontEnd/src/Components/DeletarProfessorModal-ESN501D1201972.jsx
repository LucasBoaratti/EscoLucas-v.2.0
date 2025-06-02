import { useNavigate } from "react-router-dom";
import css from "./DeletarProfessorModal.module.css";
import axios from "axios";

export function DeletarProfessorModal({ openModal, closeModal, atualizarTabelaProfessores }) {
    if (!openModal) { //Verificando se o modal não foi aberto
        return null;
    }

    async function DeletarProfessorDELETE() {  
        const token = localStorage.getItem("access_token"); //Pegando o token com o localstorage
        const id = localStorage.getItem("id"); //Pegando o ID do professor com localstorage

        try {
            const response = axios.delete(`http://127.0.0.1:8000/escolucas/professor/${id}/`, { //Realizando uma requisição DELETE com o axios para a url de professor
                headers: { 
                    "Authorization": `Bearer ${token}`, //Buscando o token e incluindo no cabeçalho
                }
            })

            alert("Professor deletado com sucesso!");

            closeModal(); //Chamando a função de fechar o modal após o popup

            atualizarTabelaProfessores(); //Atualizando a tabela dos professores
        }
        catch(error) { //Exibindo uma mensagem de erro caso dê tudo errado
            console.error("Erro ao deletar professor: ", error);
        }
    }

    return (
        <div className={css.mainModal}>
            <div className={css.containerModal}>
                <h1>Tem certeza que deseja deletar esse professor?</h1>
                <div className={css.botoes}>
                    {/* Chamando a função DeletarProfessorDELETE após clicar no botão */}
                    <button type="submit" onClick={DeletarProfessorDELETE}>Sim</button> 
                    <button type="button" onClick={closeModal}>Não</button>
                </div>
            </div>
        </div>
    )
}