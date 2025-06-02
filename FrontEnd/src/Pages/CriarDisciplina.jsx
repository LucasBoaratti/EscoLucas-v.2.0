import { useForm } from "react-hook-form";
import css from "./CriarDisciplina.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import axios from "axios";

const schemaPOST = z.object({
    nome: z.string()
        .min(1, "Digite o nome da disciplina, por favor.")
        .max(100, "O nome da disciplina não pode ter mais de 100 caracteres."),
    curso: z.string()
        .min(1, "Digte o nome do curso, por favor.")
        .max(100, "O nome do curso não pode ter mais de 100 caracteres."),
    cargaHoraria: z.number()
        .positive(),
    descricao: z.string()
        .min(1, "Digite a descrição da disciplina, por favor."),
    professorResponsavel: z.number()
        .positive(),
})

export function CriarDisciplina() {
    const {
        register, //Ligação dos inputs com o estado do componente
        handleSubmit, //Captura a submissão do formulário e valida os dados
        formState: { errors }, //Armazenando mensagens de erro com o errors
    } = useForm({
        resolver: zodResolver(schemaPOST)
    })

    const navigate = useNavigate();

    async function CriarDisciplina(data) {
        const token = localStorage.getItem("access_token");

        if (!token) {
            console.log("Token não encontrado.");
            return;
        }

        try {
            const formatarDados = {
                ...data,
            }
            const response = await axios.post("http://127.0.0.1:8000/escolucas/disciplina/", formatarDados, {
                headers: {
                    "Authorization": `Bearer ${token}`, 
                    "Content-Type": "application/json",
                }
            })

            alert("Disciplina criada com sucesso!");

            navigate("/disciplinaCRUD");
        }
        catch(error) {
            console.error("Erro na criação de disciplina: ", error);
        }
    }

    return (
        <main className={css.containerFormulario}>
            <div className={css.formulario}>
                <h1>Criar disciplina</h1>
                <form className={css.dadosFormulario} onSubmit={handleSubmit(CriarDisciplina)}>
                    <label htmlFor="nome">Nome:</label> <br />
                    <input type="text" name="nome" id="nome" {...register("nome")}/> <br />
                    {errors.nome && <p>{errors.nome.message}</p>} 

                    <label htmlFor="curso">Curso:</label> <br />
                    <input type="text" name="curso" id="curso" {...register("curso")}/> <br />
                    {errors.curso && <p>{errors.curso.message}</p>} 

                    <label htmlFor="cargaHoraria">Carga horária:</label> <br />
                    <input type="number" name="cargaHoraria" id="cargaHoraria" {...register("cargaHoraria", { valueAsNumber: true})}/> <br />
                    {errors.cargaHoraria && <p>{errors.cargaHoraria.message}</p>} 

                    <label htmlFor="descricao">Descrição:</label> <br />
                    <input type="text" name="descricao" id="descricao" {...register("descricao")}/> <br />
                    {errors.descricao && <p>{errors.descricao.message}</p>} 

                    <label htmlFor="professorResponsavel">Professor responsável (ID):</label> <br />
                    <input type="number" name="professorResponsavel" id="professorResponsavel" {...register("professorResponsavel", {valueAsNumber: true})}/> <br />
                    {errors.professorResponsavel && <p>{errors.professorResponsavel.message}</p>} 

                    <div className={css.botoesFormulario}>
                        <button type="button" onClick={() => navigate("/disciplinaCRUD")}>Voltar</button>
                        <button type="submit">Criar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}