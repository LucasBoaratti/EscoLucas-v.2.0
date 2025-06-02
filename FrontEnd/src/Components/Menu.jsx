import css from "./Menu.module.css";
import Professor from "../assets/Images/Professor.png";
import Gestor from "../assets/Images/Gestor.png";
import { useNavigate } from "react-router-dom";

export function Menu() {
    const navigate = useNavigate();

    return (
        <div className={css.container}>
            <h1>Conheça a escoLucas!</h1>
            <div className={css.endpoints}>
                <div className={css.professores} onClick={() => navigate("/professor")}>
                    <img src={Professor} alt="Imagem de um professor." />
                    <p>Professores</p>
                </div>
                <div className={css.gestores} onClick={() => navigate("/gestor")}>
                    <img src={Gestor} alt="Imagem de um gestor." />
                    <p>Gestores</p>
                </div>
            </div>
        </div>
    )
}