import { Navigate } from "react-router-dom";

export function Permissao({ children }) {
    const funcao = localStorage.getItem("função");

    if(funcao !== "Gestor") {
        alert("Apenas os gestores podem acessar essa página, desculpe-me.");

        return <Navigate to="/inicial"/>;
    }

    return children;
}