import React from 'react'
import Logo from "../../assets/leaf-logo-1x.png"

// style
import {Head} from './style'

function Header() {
    return (
        <Head>
            <img src={Logo} alt={Logo} className='w-40' />
        </Head>
    )
}

export default Header