
import React from 'react'
import '../styles/index.scss'
import PanelSocialMedias from './panel-social-medias'
import Header from './header'
import Divisor from './header/divisor'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
            <PanelSocialMedias />
            <Header />
            <Divisor/>
            <main className="container">
                {props.children}
            </main>
            <Footer />
            <PanelSocialMedias />
        </div>
    )
}

export default Layout;