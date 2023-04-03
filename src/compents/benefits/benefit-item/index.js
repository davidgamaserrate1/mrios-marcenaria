import './benefit-item-styles.css'

const BenefitItem = (props) => {
    return (

        <div className="benefit-item">
            <div className='benefit-tittle'> {props.titulo}</div>
            <div className='benefit-description'> {props.description}</div>
        </div>
    )
}

export default BenefitItem