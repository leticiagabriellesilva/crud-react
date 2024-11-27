import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function LivroDelete() {
    const [status, setStatus] = useState("");
    const [livro, setLivro] = useState({ nome: "", autor: "", anoLancamento: "", editora: "", genero: "", estoque: "" });
    const nome = useRef("");
    const autor = useRef("");
    const anoLancamento = useRef("");
    const editora = useRef("");
    const genero = useRef("");
    const estoque = useRef("");
    const { id } = useParams(); 

   
    useEffect(() => {
        const fetchLivro = async () => {
            try {
                const resposta = await axios.get(`http://localhost:8000/api/livro/${id}`);
                setLivro(resposta.data);
            } catch (error) {
                console.error("Erro ao buscar livro!:", error);
            }
        };
        fetchLivro();
    }, [id]);

    async function deletar(e) {
        e.preventDefault();
        try {
            const livroDeletado = {
                nome: nome.current.value,
                autor: autor.current.value,
                anoLancamento: anoLancamento.current.value,
                editora: editora.current.value,
                genero: genero.current.value,
                estoque: estoque.current.value,
            };

            const resposta = await axios.delete(`http://localhost:8000/api/livro/${id}`, livroDeletado);
            setStatus("Livro deletado com sucesso!");
            console.log(resposta);
        } catch (error) {
            console.error("Erro ao deletar o livro:", error);
            setStatus("Falha ao carregar o livro!");
        }
    }

    return (
        <div>
            <h2>Deletar Livro</h2>
            <form onSubmit={deletar}>
            Nome: <input 
                        ref={nome} 
                        type="text" 
                        maxLength="100" 
                        defaultValue={livro.nome}
                        required 
                    />
                Autor: <input 
                        ref={autor} 
                        type="text" 
                        maxLength="100" 
                        defaultValue={livro.autor}
                        required 
                    />
                Ano Lançamento: <input 
                        ref={anoLancamento} 
                        type="number" 
                        step="0.01" 
                        defaultValue={livro.anoLancamento}
                        required 
                    />
                Editora: <input 
                        ref={editora} 
                        type="text" 
                        maxLength="100"
                        defaultValue={livro.editora}
                        required 
                    />
                Gênero: <input 
                        ref={genero} 
                        type="text" 
                        maxLength="100"
                        defaultValue={livro.genero}
                        required 
                    />
                Estoque: <input 
                        ref={estoque} 
                        type="number" 
                        step="0.01" 
                        defaultValue={livro.estoque}
                        required 
                    />
                <button type="submit">Deletar</button>
            </form>
            <h3>{status}</h3>
            <Link to="/livro">Voltar</Link>
        </div>
    );
}