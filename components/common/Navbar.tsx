import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import Products from './navbar/products'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className='fixed top-0 w-full py-2 bg-black px-20  z-40'>
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-[60%] flex items-center justify-between">
                    <Link href="" className='text-white text-lg font-semibold'>mollie</Link>
                    <ul className='flex items-center space-x-8 text-gray-400 text-sm '>
                        <Products />
                        <li>Partners</li>
                        <li>Developers</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                        {/* <NavItems /> */}
                    </ul>
                </div>

                <div className='flex gap-3'>
                    <Button className='bg-gray-500/30 text-white hover:bg-gray-500/70 rounded-lg'>Login</Button>
                    <Button className='bg-app hover:bg-app/80 rounded-lg'>Sign up</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar