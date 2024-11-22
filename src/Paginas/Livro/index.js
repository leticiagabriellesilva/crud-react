import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Livro() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        async function consultar() {
            const resposta = await axios.get("http://localhost:8000/api/livro");
            console.log(resposta);  
            setLivros(resposta.data);
        }

        consultar();
    },[]
    )

    return (
    <div>
        <Link to='/livro/create'>Novo</Link>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Autor</th>
                    <th>Ano Lançamento</th>
                    <th>Editora</th>
                    <th>Gênero</th>
                    <th>Estoque</th>
                </tr>
            </thead>
            <tbody>
                {livros == null ? null : livros.map(
                    (livro) =>
                        <tr key={livro.id}>
                            <td>{livro.nome}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.anoLancamento}</td>
                            <td>{livro.editora}</td>
                            <td>{livro.genero}</td>
                            <td>{livro.estoque}</td>
                            <td><Link to={"/livro/update/" + livro.id}>Alterar</Link></td>
                            <td><Link to={"/livro/delete/" + livro.id}>Excluir</Link></td>
                        </tr>
                )}
            </tbody>
        </table>
        <Link to="/">Voltar</Link>
    </div>
    )
}

