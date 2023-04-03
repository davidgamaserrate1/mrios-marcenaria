import './benefits-styles.css'
import BenefitItem from './benefit-item'


const Benefits = () => {
    return (
        <>
            <h2>beneficios</h2>
            <section id="benefits">
                <div className='benefit-items'>
                    <BenefitItem titulo='Economia' description='preços acessiveis e as melhores condições de pagamento' />
                    <BenefitItem titulo='Agilidade' description='Tempo de entrega' />
                    <BenefitItem titulo='Economia' description='preços acessiveis e as melhores condições de pagamento' />
                    <BenefitItem titulo='Agilidade' description='Tempo de entrega' />
                    <BenefitItem titulo='Economia' description='preços acessiveis e as melhores condições de pagamento' />
                    <BenefitItem titulo='Agilidade' description='Tempo de entrega' />
                    
                </div>

            </section>
        </>
    )
}

export default Benefits