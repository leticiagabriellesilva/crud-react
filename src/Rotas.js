import Home from './Paginas/Home';
import Sobre from './Paginas/Sobre';
import Layout from './Paginas/Layout';
import Livro from './Paginas/Livro';
import LivroCreate from './Paginas/Livro/create';
import LivroEdit from './Paginas/Livro/edit';
import LivroDelete from './Paginas/Livro/delete';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="livro" element={<Livro />} />
                    <Route path="livro/create" element={<LivroCreate />} />
                    <Route path="/livro/update/:id" element={<LivroEdit/>} />
                    <Route path="/livro/delete/:id" element={<LivroDelete/>} />
                    <Route path="" element={<h1>Inexistente</h1>} /> { /* Comentário: rota */}
                </Route>
            </Routes>
        </BrowserRouter >
    )
}