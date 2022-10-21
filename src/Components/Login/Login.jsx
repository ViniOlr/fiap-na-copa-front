import React from 'react';
import { Container, SectionLogin } from '../../style/styled';


const Login = ()=> {
  return (
    <SectionLogin>
        <div className="formulario">
            <h2>Olá, Seja Bem Vindo!</h2>
            <p>Efetue o login em nossa platarforma para ter acesso aos nossos diversos conteudos.</p>
            <form>
                <div>
                    <label>Usuário</label>
                    <input type="text" name="login" id="login" />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" name="senha" id="senha" />
                </div>
                <button>Logar</button>
            </form>
        </div>
    </SectionLogin>
  );
}

export default Login;