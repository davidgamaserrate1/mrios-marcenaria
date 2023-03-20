import './benefits-styles.css'
import BenefitItem from './benefit-item'


const Benefits = () => {
    return (
        <section id="benefits">
            <BenefitItem titulo='Economia' description='preços acessiveis e as melhores condições de pagamento' />
            <BenefitItem titulo='Agilidade' description='Tempo de entrega' />
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
        </section>
    )
}

export default Benefits