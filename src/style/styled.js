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

export const SectionFooter = styled.footer`
    background-color: gray;
    padding: 20px 0;
    .integrantes {
        ul {
            margin: 10px 0 0 30px;
        }
    }
`;