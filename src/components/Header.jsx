import React from 'react'
import Logo from "../assets/leaf-logo-1x.png"

function Header() {
    return (
        <div className='bg-[#6491fe] h-16 flex items-center p-8'>
            <img src={Logo} alt={Logo} className='w-40' />
        </div>
    )
}

export default Header