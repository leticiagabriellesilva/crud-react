import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function LivroCreate() {
    const [status, setStatus] = useState("");

    const nome = useRef("");
    const autor = useRef("");
    const anoLancamento = useRef("");
    const editora = useRef("");
    const genero = useRef("");
    const estoque = useRef("");


    return (
        <div>
            <form onSubmit={ gravar }>
                Nome: <input ref={nome} type="text" maxLength="100" required />
                Autor: <input ref={autor} type="text" maxLength="100" required />
                Ano Lançamento: <input ref={anoLancamento} type="number" step="0000" required />
                Editora: <input ref={editora} type="text" maxLength="100" required />
                Genero: <input ref={genero} type="text" maxLength="100" required />
                Estoque: <input ref={estoque} type="number" step="0000" required />
                <button type="submit">Enviar</button>
            </form>
            <h3>{status}</h3>
            <Link to='/livro'>Voltar</Link>
        </div>
    )

    async function gravar(e){
        e.preventDefault(); 
        try{
            const livro = {
                nome: nome.current.value, 
                autor: autor.current.value, 
                anoLancamento: anoLancamento.current.value, 
                editora: editora.current.value, 
                genero: genero.current.value, 
                estoque: estoque.current.value}
            const resposta = await axios.post('http://localhost:8000/api/livro', livro);
            setStatus("Livro cadastrado");
            console.log(resposta); 
        } catch(erro){
            setStatus("Falha ao cadastrar Livro");
        }
    }
}