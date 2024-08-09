import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { developerResources, paymentOptions, Resources, supportOptions } from '@/data/data'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='mt-20 bg-black text-white'>
            <div className="container mx-auto px-24 flex flex-col">
                <div className='flex flex-col gap-4 mt-24 mb-16'>
                    <h1 className='font-bold text-5xl leading-snug text-white'>Simplify payments <br />
                        and money management</h1>

                    <h3 className="text-2xl">Drive revenue, reduce costs, and manage funds with Mollie.</h3>
                    <div className='pt-4 flex gap-2 items-center'>
                        <Button className='bg-app hover:bg-app/80 rounded-lg flex gap-3'>
                            Get started <ArrowRight size='20' />
                        </Button>
                        <Button className='bg-black text-white hover:bg-gray-500/70 rounded-lg' size='lg'>Contact sales</Button>
                    </div>
                </div>

                <div className='grid grid-cols-5 justify-between font-semibold text-gray-600 py-10'>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white'>Mollie</h4>

                        {supportOptions.map((field, index) => (
                            <Link href="" key={index}>{field.field}</Link>
                        ))}
                    </div>

                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white'>Products</h4>
                        {paymentOptions.map((field, index) => (
                            <Link href="" key={index}>{field.field}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white'>Developers</h4>
                        {developerResources.map((field, index) => (
                            <Link href="" key={index}>{field.field}</Link>
                        ))}
                    </div>


                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white'>Resources</h4>
                        {Resources.map((field, index) => (
                            <Link href="" key={index}>{field.field}</Link>
                        ))}
                    </div>

                    <div>
                        <h4 className='text-white'>Location and language</h4>
                        
                    </div>
                </div>


                <div className='flex justify-between text-gray-500 mb-4'>
                        <div className='flex gap-4 text-sm'>
                            <div> &copy; 2024 Mollie B.V.</div>
                            <div>User Agreement</div>
                            <div>Privacy Statement</div>
                            <div>Responsible Disclosure</div>
                            <div>Whistleblowe policy</div>
                            <div>Impressum</div>
                            <div>Cookie settings</div>
                        </div>

                        <div>
                            
                        </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer