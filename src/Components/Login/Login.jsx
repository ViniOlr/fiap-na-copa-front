import React, { useState } from 'react';
import { Container, SectionLogin } from '../../style/styled';


const Login = ()=> {

    const [usuario, setUsuario] = useState({
        login: '',
        senha: '',
        nome: '',
        rm: ''
    })

    const handleChange = (e)=>{
        setUsuario({...usuario, [e.target.name]:e.target.value})
    };

    const logar = async(e)=>{
        e.preventDefault();

        const requestOptions = {
            method : "post",
            headers : { "Content-Type" : "application/json"},
            body: JSON.stringify(usuario)
        };

        const response = await fetch(
            "http://localhost:8080/ControleAcesso/rest/login/",
           requestOptions
        );

        const data = await response.json()

        if(data.login) {
            sessionStorage.setItem("usuario-validado", data.login)
        }

        if (data) {
            window.location = '/figsNacionais'
        }else {
            window.location = '/'
        }
    }

  return (
    <SectionLogin>
        <Container>
            <div className="formulario">
                <h2>Olá, Seja Bem Vindo!</h2>
                <p>Efetue o login em nossa platarforma para ter acesso aos nossos diversos conteudos.</p>
                <form onSubmit={logar}>
                    <div>
                        <label>Usuário</label>
                        <input type="text" name="login" id="login" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" name="senha" id="senha" onChange={handleChange} />
                    </div>
                    <button type='submit'>Logar</button>
                </form>
            </div>
        </Container>
    </SectionLogin>
  );
}

export default Login;