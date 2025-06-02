import css from "./Gestor_Endpoints.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Professor_CRUD from "../assets/Images/Professor_CRUD.png";
import Disciplina_CRUD from "../assets/Images/Disciplina_CRUD.png";
import Ambiente_CRUD from "../assets/Images/Ambiente_CRUD.png";

export function Gestor_Endpoints() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');

    function ObterNome() {
        try {
            axios.get('http://127.0.0.1:8000/escolucas/login/');

            setUsername(data.usuario.username); 

            localStorage.setItem('username', data.usuario.username);
        }
        catch(error) {
            console.error("Erro ao obter nome.", error);
        }
    }

    useEffect(() => {
        const nome = localStorage.getItem('username');
        
        if (nome) {
            setUsername(nome);
        }
        else {
            ObterNome();
        }
    }, []);

    return (
        <main>
            <div className={css.container}>
                <h1>Bem vindo(a) à página de gestores, {username}!</h1>
                <div className={css.endpointsGestor}>
                    <div className={css.professor} onClick={() => navigate("/professorCRUD")}>
                        <img src={Professor_CRUD} alt="Professor com símbolos de mais, olhos, setas girando no sentido horário e uma lixeira abaixo da foto." />
                        <p>Professores</p>
                    </div>
                    <div className={css.disciplina} onClick={() => navigate("/disciplinaCRUD")}>
                        <img src={Disciplina_CRUD} alt="Livros com símbolos de mais, olhos, setas girando no sentido horário e uma lixeira abaixo da foto." />
                        <p>Disciplinas</p>
                    </div>
                    <div className={css.ambiente} onClick={() => navigate("/ambienteCRUD")}>
                        <img src={Ambiente_CRUD} alt="Sala de aula com símbolos de mais, olhos, setas girando no sentido horário e uma lixeira abaixo da foto." />
                        <p>Ambientes</p>
                    </div>
                </div>
            </div>
        </main>
    )
}