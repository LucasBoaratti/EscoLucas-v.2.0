import { Cabecalho } from "../Components/Cabecalho";
import { Outlet } from "react-router-dom";
import { Rodape } from "../Components/Rodape";

export function Index() {
	return (
		<div style={{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
			<Cabecalho/>
			{/* Fixando o rodapé no fim das páginas com flex:"1" */}
			<div style={{flex:"1"}}> 
				<Outlet/>
			</div>
			<Rodape/>
		</div>
	)
}