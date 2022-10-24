import React from 'react';
import { Clear, Container, SectionHome, TituloPrincipal } from '../../style/styled';
import AlbumCopaDoMundo from '../../img/album_da_copa.webp'
import SelecaoBrasileira from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0001.jpg'
import PaginaInicial from '../../img/ilovepdf_pages-to-jpg/Quadro de honra_page-0001.jpg'
import Estadios from '../../img/ilovepdf_pages-to-jpg/Quadro de honra_page-0002.jpg'
import LinhaDoTempo from '../../img/ilovepdf_pages-to-jpg/Quadro de honra_page-0003.jpg'
import CocaCola from '../../img/ilovepdf_pages-to-jpg/Quadro de honra_page-0004.jpg'
import Figure from '../Figure';

const Home = ()=> {
  return (
    <SectionHome>
        <Container>
            <TituloPrincipal>A febre do momento</TituloPrincipal>
            <div className="text">
              <Figure 
                id='albumCopaDoMundo'
                img={AlbumCopaDoMundo}
                alt='Album da copa do mundo e pacotinhos'
                figcaption='Álbum da Copa do Mundo 2022 é a sensação entre colecionadores | Imagem: Bruno Madrid/UOL'
              />
              <p>A paixão de grande parte dos brasileiros por futebol é indiscutível. Mas, quando chega o ano de Copa do Mundo, parece que ainda mais pessoas compactuam desse amor. E não é por menos, afinal de contas, os melhores jogadores de diferentes times ao redor do planeta são convocados para se unirem e defenderem seu país e, claro, levando consigo a torcida daquele público.</p>
              <p>"Nós, brasileiros, temos poucos momentos em que a sociedade se une em prol de alguma coisa e a Copa do Mundo faz aqui esse movimento de união. E isto é extremamente valioso, tanto que a maioria das pessoas vive intensamente esse momento torcendo por algo em comum", afirma Yuri Busin, psicólogo, mestre e doutor em neurociência do comportamento pela Universidade Presbiteriana Mackenzie, em São Paulo.</p>
              <p>O que acontece é que essa paixão nacional é tão avassaladora que milhares de pessoas, além de torcerem juntas, também passam a colecionar figurinhas do tão famoso álbum da Copa.</p>
              <p>Foi o caso de Fernando Martinez, 46 anos, jornalista e editor do blog Jogos Perdidos, que desde a Copa de 1982, na Espanha, faz parte do time dos colecionadores de figurinhas da Copa do Mundo. "Eu sempre gostei de futebol desde que me conheço por gente. E aí, depois do primeiro álbum, não parei mais", conta.</p>
              <h3>A ciência explica</h3>
              <p>Mas o que justifica tamanho fascínio desses colecionadores? "O comportamento de colecionar pode ter diferentes significados para cada pessoa. Algumas motivações têm sido identificadas em estudos da área de comportamento de consumo", diz Dhayana Veiga Bender, doutora em psicologia e coordenadora do curso de psicologia da Universidade Positivo (UP), em Curitiba.</p>
              <p>De acordo com Dhayana, entre as diversas razões por trás dessa ânsia em colecionar o álbum da Copa estão:</p>
              <ul>
                <li>A própria realização e sucesso ao atingir metas de consumo, que podem ser recompensadoras;</li>
                <li>A pertencimento social, ou seja, ser parte de um grupo e sentir-se membro e pertencente a ele, podendo trazer sensação de segurança ou status;</li>
                <li>Memórias sociais ou pessoais afetivas, entre outros.</li>
              </ul>
              <p>A ideia de poder estar ainda mais próxima dos amigos, e até de pessoas desconhecidas, mas que dividem do mesmo amor pelo futebol, é um dos motivos pelos quais Vanessa Alsberg, 33 anos, influenciadora digital, passou a colecionar os álbuns da Copa do Mundo.</p>
              <p>"Eu sempre fui apaixonada por coleções. Gosto de guardar tudo que eu considero colecionável. Por isso, já estou mega ansiosa para começar a trocar figurinhas. Para mim, é uma forma de começar a viver a Copa antes mesmo de seu início", afirma.</p>
              <p>Texto retirado de: <a href="https://www.uol.com.br/esporte/ultimas-noticias/2022/09/01/album-da-copa-2022-o-que-explica-a-febre-entre-colecionadores.htm">UOL Esporte</a>.</p>
            </div>
            <TituloPrincipal>Explicação das Páginas</TituloPrincipal>
            <div className="text">
                <Figure 
                    id='selecaoBrasileira'
                    img={SelecaoBrasileira}
                    alt='Página da seleção do álbum da copa'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <p>Irei usar como exemplo esta foto acima, tirada por mim do meu próprio álbum da copa, a seleção que eu escolhi para explicar é a da seleção brasileira.</p>
                <p>Cada página das seleções consiste em 18 espaços para serem preenchidos com figurinhas de jogadores que foram escalados para representar o seu pais na Copa do Mundo, em cada figurinha há informações do jogador, como a estreia dele na seleção, data de nascimento, nome, altura, peso e posição em que joga. Outro espaço e reservado para ilustrar o brasão da seleção e um outro com o time todo reunido. Totalizando 20 figurinhas por seleção.</p>
                <div>
                    <Figure 
                        id='paginaInicial'
                        img={PaginaInicial}
                        alt='Página inicial do álbum'
                        figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                    />
                    <p>Nessa página há algumas informações do álbum e figurinhas como a da panini, da FIFA, da taça da copa, do mascote da copa e do logo da copa.</p>
                </div>
                <Clear />
                <div>
                    <Figure 
                        id='estadios'
                        img={Estadios}
                        alt='Página dos estádios da copa'
                        figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                    />
                    <p>Nessa página há 11 espaços para figurinhas, 10 representam os estádios que ocorrerá os jogos da copa do pais do Qtar e 1 representa a bola oficial da Copa do Mundo de 2022, a Al Rihla.</p>
                </div>
                <Clear />
                <div>
                    <Figure 
                        id='linhaDoTempo'
                        img={LinhaDoTempo}
                        alt='Página da linha do tempo'
                        figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                    />
                    <p>No final do álbum, tem um sessão que trás informações referente as Copas do Mundo passadas, desde a primeira, nela há 11 espaços para figurinhas de algumas seleções que ganharam as copas do Mundo, trazendo a foto da seleção em si e informações como o ano, data, estádio, resultado do jogo e etc.</p>
                </div>
                <Clear />
                <div>
                    <Figure 
                        id='paginaCoca'
                        img={CocaCola}
                        alt='Página da coca'
                        figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                    />
                    <p>A última página é reservada para a Coca-Cola, nela há 8 espaços para figurinhas de jogadores que vem na coca cola zero açucar de 2 litros, vendida normalmente no mercado.</p>
                </div>
                <Clear />
            </div>
        </Container>
    </SectionHome>
  )
}

export default Home;