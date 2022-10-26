import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2%;
`;

export const Clear = styled.div`
    clear: both;
`;

export const TituloPrincipal = styled.h2`
    margin: 30px 0 40px 0;
    font-size: 1.6em;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    ::before {
        content: '';
        width: 50%;
        height: 4px;
        background-color: var(--vermelho-qtar);
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.3s;
    }
    :hover::before {
        width: 75%;
    }
    svg {
        font-size: 1.3em;
        margin-right: 7px;
    }
`;

export const SectionHeader = styled.header`
    background-color: var(--vermelho-qtar);
    padding: 30px 0;
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        font-family: qatar2022arabic-heavy;
        font-weight: normal;
        color: white;
        span {
            display: block;
            font-size: 0.5em;
            font-family: 'Times New Roman', Times, serif;
            text-align: center;
        }
    }
    nav ul {
        list-style: none;
        display: flex;
        gap: 0 30px; 
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.1em;
            a {
                color: white;
                text-decoration: none;
                :hover {
                    text-decoration: underline;
                }
            }
            button {
                padding: 7px 20px;
                border-radius: 7px;
                border: 1px solid black;
                color: white;
                background: rgb(252,70,107);
                background: radial-gradient(circle, rgba(252,70,107,1) 0%, rgba(90,0,0,1) 100%);
                transition: 0.3s;
                text-transform: uppercase;
                cursor: pointer;
                :hover {
                    /* background-color: var(--dark-vermelho-qtar); */
                    background: var(--dark-vermelho-qtar);
                }
            }
        }
    }
`;

export const SectionLogin = styled.section`
    width: 100%;
    height: 100%;
    margin: 60px 0;
    position: relative;
    .formulario {
        width: 100%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        max-width: 750px;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.4);        
        h2, p {
            text-align: center;
            margin: 15px 0;
        }
        p {
            margin-bottom: 75px;
        }
        form {
            width: 450px;
            margin: 15px auto;
            input {
                width: 100%;
                height: 30px;
                font-size: 1.1em;
                border: 0;
                border-bottom: 1px solid gray;
                background-color: transparent;
                margin-bottom: 40px;
                :focus {
                    outline: 0;
                }
            }
            button {
                width: 100%;
                padding: 10px 0;
                font-size: 1.2em;
                text-transform: uppercase;
                border: 0;
                border-radius: 20px;
                background-color: var(--vermelho-qtar);
                color: white;
                cursor: pointer;
                :hover {
                    background-color: var(--dark-vermelho-qtar);
                }
            }
        }
    }
`;

export const FigureContent = styled.div`
    figure{
        border: 1px solid white;
        margin: 15px;
        img {
            width: 100%;
        }
        figcaption {
            font-size: 0.7em;
            margin: 5px;
        }
    }
    
    figure#albumCopaDoMundo {
        width: 400px;
        float: right;
        margin-left: 25px;
        
    }
    figure#selecaoBrasileira {
        width: 100%;
    }
    figure#paginaInicial,
    figure#linhaDoTempo {
        width: 30%;
        float: left;
    }
    figure#estadios,
    figure#paginaCoca {
        width: 30%;
        float: right;
    }
    figure#figSingle {
        width: 250px;
    }
`;

export const SectionHome = styled.section`
    margin: 30px 0;
    .text {
        font-size: 1.3em;
        > div {
            padding: 10px 0;
        }
        p {            
            margin-top: 15px;
        }
        h3 {
            margin: 30px 0;
        }
        ul {
            margin: 25px 0 25px 50px;
        }
    }
`;

export const SectionFigs = styled.section`
    .figurinhas {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

export const SectionFooter = styled.footer`
    width: 100%;
    background-color: gray;
    padding: 20px 0;
    position: relative;
    bottom: 0;
    .integrantes {
        ul {
            margin: 10px 0 0 30px;
        }
    }
`;