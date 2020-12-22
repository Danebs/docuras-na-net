import React from 'react'
import { Helmet } from 'react-helmet';

const SEO = ({title}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{(title) ? title : 'Doçuras na Net' }</title>
        </Helmet>
    )
}

export default SEO;