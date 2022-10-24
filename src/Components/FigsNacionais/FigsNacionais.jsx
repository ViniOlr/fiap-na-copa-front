import React, { useEffect } from 'react';
import { Container, SectionFigs, TituloPrincipal } from '../../style/styled';
import Figure from '../Figure';
import FigBra1 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0002.jpg'
import FigBra2 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0003.jpg'
import FigBra3 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0004.jpg'
import FigBra4 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0005.jpg'
import FigBra5 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0006.jpg'
import FigBra6 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0007.jpg'
import FigBra7 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0008.jpg'
import FigBra8 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0009.jpg'
import FigBra9 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0010.jpg'
import FigBra10 from '../../img/ilovepdf_pages-to-jpg/BRAZIL_page-0011.jpg'

function FigsNacionais() {

    const verificar = sessionStorage.getItem("usuario-validado")

    useEffect(()=>{
        if (verificar == null) {
            window.location = '/'
        }
    })

    return (
        <>
            {verificar &&(
                <SectionFigs>
                    <Container>
                        <TituloPrincipal>Figurinhas nacionais</TituloPrincipal>
                        <div className="figurinhas">
                            <Figure 
                                id='figSingle'
                                img={FigBra1}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra2}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra3}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra4}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra5}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra6}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra7}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra8}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra9}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                            <Figure 
                                id='figSingle'
                                img={FigBra10}
                                alt='Figurinha da copa do Mundo.'
                                figcaption='Imagem tirada por mim mesmo do meu álbum da Copa.'
                            />
                        </div>
                    </Container>
                </SectionFigs>
            )}
        </>
    );
}

export default FigsNacionais;