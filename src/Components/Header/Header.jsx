import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionHeader } from '../../style/styled';


// import { Container } from './styles';

const Header = ()=> {

    const logout = ()=>{
        sessionStorage.removeItem("usuario-validado")
        window.location = '/'
    }

    const usuario = sessionStorage.getItem("usuario-validado")

    return (
        <SectionHeader>
            <Container>
                <h1>FIAP na Copa {usuario &&(<span>Seja Bem vindo {usuario}</span>)}</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/figsNacionais">Figuinhas Nacionais</Link></li>
                        <li><Link to="/figsInternacionais">Figuinhas Internacionais</Link></li>
                        {usuario === null &&(
                            <li><Link to="/login"><button>Login</button></Link></li>
                        )}
                        {usuario &&(
                            <li><button onClick={logout}>Logout</button></li>
                        )}
                    </ul>
                </nav>
            </Container>
        </SectionHeader>
    );
}

export default Header;