import css from "./Professor_Endpoints.module.css";
import Lupa_Sala from "../assets/Images/Lupa_Sala.png";
import Lupa_Disciplina from "../assets/Images/Lupa_Disciplina.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Professor_Endpoints() {
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
                <h1>Bem vindo(a) à página de professores! o que você deseja fazer, {username}?</h1>
                <div className={css.endpointsProfessor}>
                    <div className={css.buscarSala} onClick={() => navigate("/buscarSala")}>
                        <img src={Lupa_Sala} alt="Lupa com uma sala ao fundo." />
                        <p>Verificar sala reservada</p>
                    </div>
                    <div className={css.buscarDisciplina} onClick={() => navigate("/buscarDisciplina")}>
                        <img src={Lupa_Disciplina} alt="Lupa com uma sala ao fundo." />
                        <p>Verificar disciplina</p>
                    </div>
                </div>    
            </div> 
        </main>
    )
}