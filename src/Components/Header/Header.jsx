import React from 'react';
import { Container, SectionHeader } from '../../style/styled';


// import { Container } from './styles';

const Header = ()=> {
  return (
    <SectionHeader>
        <Container>
            <h1>FIAP na Copa</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Figuinhas Nacionais</a></li>
                    <li><a href="/">Figuinhas Internacionais</a></li>
                    <li><button>Logar</button></li>
                </ul>
            </nav>
        </Container>
    </SectionHeader>
  );
}

export default Header;