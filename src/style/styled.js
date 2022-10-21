import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2%;
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
    margin: 30px 0;
    min-height: calc(100vh - 277px);
    position: relative;
    .formulario {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
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