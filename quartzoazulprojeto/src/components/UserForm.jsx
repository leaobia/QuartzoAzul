import React, { useState } from 'react';
import '../css/usuario.css'
import logo from '../img/logoFormulario.png'
import { Link } from 'react-router-dom';
function 

UserForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('senha', senha);
        formData.append('telefone', telefone);

        try {
            const response = await fetch("http://localhost/QuartzoAzul/quartzoazulprojeto/src/php/cadastrarUsuario.php", {
                method: 'POST',
                body: formData, 
            });

            if (response.ok) {
                const result = await response.json(); // Aqui, temos a resposta em JSON
                console.log(result); // Veja o que está sendo retornado pelo servidor
        
                setMensagem(result.message); 
                setSucesso(result.success);   
            } else {
                throw new Error("Erro ao conectar ao servidor.");
            }
        } catch (error) {
            setMensagem("Erro na comunicação com o servidor.");
            setSucesso(false);
        }

    
            // if (response.ok) {
            //     const result = await response.json(); 
        
            //     setMensagem(result.message); 
            //     setSucesso(result.success);   
            // } else {
            //     throw new Error("Erro ao conectar ao servidor.");
            // }
        // } catch (error) {
        //     setMensagem("Erro na comunicação com o servidor.");
        //     setSucesso(false);
        // }
        
    };

    return (
        <div className="container">
            <div className="form-image">
                <img src={logo} alt="Logo" />
            </div>
            <div className="form">
                <form id="usuario" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <div className="tittle">
                            <h1>Criar Conta</h1>
                        </div>
                        <div className="returnbutton">
                            <button>
                                <Link to="/">Voltar</Link>
                            </button>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="nome">Nome Completo</label>
                            <input
                                id="nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Digite seu nome"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite seu email"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="telefone">Telefone</label>
                            <input
                                id="telefone"
                                type="tel"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="ex: (11) 99999-9999"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="senha">Crie uma senha</label>
                            <input
                                id="senha"
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Crie uma senha"
                                required
                            />
                        </div>
                    </div>

                    <div className="cadastro-button">
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
                {mensagem && (
                    <p style={{ color: sucesso ? 'green' : 'red' }}>{mensagem}</p>
                )}
            </div>
        </div>
    );
}

export default UserForm;