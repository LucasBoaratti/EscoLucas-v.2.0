import css from "./Conteudo.module.css";
import { Menu } from "./Menu";

export function Conteudo() {
    return (
        <main className={css.container}>
            <Menu/>
        </main>
    )
}