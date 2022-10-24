import React from 'react';
import { Container, SectionFigs, TituloPrincipal } from '../../style/styled';
import Figure from '../Figure';
import FigInter1 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0012.jpg'
import FigInter2 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0013.jpg'
import FigInter3 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0014.jpg'
import FigInter4 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0015.jpg'
import FigInter5 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0016.jpg'
import FigInter6 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0017.jpg'
import FigInter7 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0018.jpg'
import FigInter8 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0019.jpg'
import FigInter9 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0020.jpg'
import FigInter10 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0021.jpg'

function FigsInternacionais() {
  return (
    <SectionFigs>
        <Container>
            <TituloPrincipal>Figurinhas nacionais</TituloPrincipal>
            <div className="figurinhas">
                <Figure 
                    id='figSingle'
                    img={FigInter1}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter2}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter3}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter4}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter5}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter6}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter7}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter8}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter9}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
                <Figure 
                    id='figSingle'
                    img={FigInter10}
                    alt='Figurinha da copa do Mundo.'
                    figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                />
            </div>
        </Container>
    </SectionFigs>
  );
}

export default FigsInternacionais;