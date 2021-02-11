import React from 'react'
import Logo from '../../images/logos/Logo2.png'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default () => {
    return (
        <header className="main-header container">
            <div className="align-items-center">
                <div className="logo-brand col-lg-2 col-sm-12">
                    <a href="/">
                        <img src={ Logo } alt="" width="140px" />
                    </a>
                </div>
                <nav className="col-lg-7 col-sm-12">
                    <a href="#">LOJA</a>
                    <a href="#">BLOG</a>
                    <a href="#">SOBRE</a>
                </nav>
                <div className="col-lg-3 actions col-sm-12 hidden">
                    <a href="#">
                        <FontAwesomeIcon icon={faUserPlus} size="lg" /> Criar Conta
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faSignInAlt} size="lg" /> Acessar conta
                    </a>
                </div>
            </div>
        </header> 
    )
}