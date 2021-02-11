import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {

    return (
        <div className="panel-social-medias">
            <div className="container panel-icons">
                <a href="https://www.instagram.com/docesnanaoficial/" title="Siga nosso perfil no Instagram" 
                    target="_blank" className="col-1">
                    <FontAwesomeIcon icon={faInstagram}  size="lg" />
                </a>
                <a href="https://www.facebook.com/Do%C3%A7uras-Da-Nana-110601167519420/" title="Curta nossa página no Facebook" 
                    target="_blank" className="col-1">
                    <FontAwesomeIcon icon={faFacebook}  size="lg" />
                </a>
                <a href="https://br.pinterest.com/docurasdananaofficial" title="Siga nosso perfil no Pinterest" 
                    target="_blank" className="col-1">
                    <FontAwesomeIcon icon={faPinterest} size="lg" />
                </a>
            </div>
        </div>
    )
}