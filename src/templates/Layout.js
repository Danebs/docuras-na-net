
import React from 'react'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;