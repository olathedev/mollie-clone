'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

type Props = {}

const HeroSection = (props: Props) => {

   

    return (
        <section className='w-full bg-black min-h-full'>
            <div className="container mx-auto h-full px-28 pt-32 pb-10 flex flex-col gap-10 justify-center items-center ">
                <div className="container mx-auto px-20 flex flex-col space-y-4 items-center text-center text-white">
                    <p className='text-lg text-gray-700 font-semibold'>Powering growth for over <span className='text-white font-semibold'>200,000 businesses</span>  – from startups to enterprises.</p>
                    <h1 className='text-[55px] font-semibold leading-[54px]'>Effortless payments and money <br /> management for every business</h1>
                    <div className='pt-4 flex gap-4 items-center'>
                        <Button className='bg-app hover:bg-app/80 rounded-lg flex gap-3'>
                            Get started <ArrowRight size='20' />
                        </Button>
                        <Button className='bg-gray-500/30 text-white hover:bg-gray-500/70 rounded-lg' size='lg'>Contact sales</Button>
                    </div>
                </div>

                <div className="mt-10 bg-[#1C1C1C] w-full p-2 rounded-2xl">
                    <div className=" bg-[url('/hero1.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl  w-full h-[40rem]">

                    </div>
                </div>

                <div className="py-10">

                </div>
            </div>
        </section>
    )
}

export default HeroSection