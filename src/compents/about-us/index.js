import './about-us-styles.css'
import React from 'react'

const AboutUs = () =>{
    return(
        <section id='aboutUs'>             
             <div className='aboutUs-text'> Quem somos</div>    
             <div className='divider'>______</div>    
            <p className='aboutUs-desc'>
            Somos a MRIOS, empresa especializada na fabricação e montagem de móveis exclusivos e sob medida.
            Nossa marcenaria fica em Campo Grande-MS, trabalhamos com os melhores materiais e equipamentos disponíveis no mercado, temos uma equipe técnica altamente especializada e com vasta experiência.
            Os nossos clientes, participam ativamente na elaboração de seu projeto com apoio de nossos projetistas, assim, o cliente pode escolher as cores dos móveis, até os mínimos detalhes de acabamento, como dobradiças e puxadores. Desta forma, cada cliente terá moveis exclusivos e de alta qualidade em sua casa.
            </p>
        </section>
    )
}

export default AboutUs