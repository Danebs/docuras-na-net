import React from 'react'
import Logo from '../../images/logos/Logo2.png'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcPaypal, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'

export default () => {
    return (
        <footer className="bg-secondary-theme">
            <div className="container">
                <div className="branding-logo">
                    <a href="/">
                        <img src={ Logo } alt="" width="140px" />
                    </a>
                </div>
                <h3 className="bold text-theme">Doçuras da Nana LTDA</h3>
                <div>
                    <h6>Aceitamos as seguintes bandeiras:</h6>
                    <FontAwesomeIcon icon={faCcPaypal} size="lg" className="text-theme"/>
                    <FontAwesomeIcon icon={faCcMastercard} size="lg" className="text-theme ml-10"/>
                    <FontAwesomeIcon icon={faCcVisa} size="lg" className="text-theme ml-10"/>
                </div>
            </div>
        </footer>
    )
}