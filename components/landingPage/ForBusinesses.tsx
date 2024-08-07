'use client'
import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ForBusinesses = (props: Props) => {
    const imageUrls = ["https://framerusercontent.com/images/Flxm3gL76cFlJcOnD8u7tUGHGZM.png", "https://framerusercontent.com/images/vwGjDktTUhqcjtMMEFqgmDQ1h0.png", "https://framerusercontent.com/images/F89deWRWsDXQjAUlIdZPukifF4.png", "https://framerusercontent.com/images/q6RmlaNM9Nd3ZEtZpkVLgeL7Oc.png", "https://framerusercontent.com/images/F89deWRWsDXQjAUlIdZPukifF4.png", "https://framerusercontent.com/images/q6RmlaNM9Nd3ZEtZpkVLgeL7Oc.png"]
    return (
        <div className="mt-20 w-full h-full container mx-auto px-24">
            <div className="flex flex-col gap-2 ">
                <h1 className="text-[55px] w-[60%]  font-bold leading-[4rem] text-black mb-2">Built for any business</h1>
                <p className="text-2xl text-gray-500 ">Access an ecosystem of tech solutions to level up your business
                    or seamlessly connect Mollie payments to your existing infrastructure.
                </p>
            </div>

            <div className="mt-6 flex space-x-4">
                <div className="overflow-hidden w-1/3 bg-white h-[28rem] rounded-2xl  flex flex-col  justify-between p-7">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[22px] ">Prebuilt integrations</h3>
                        <p className="text-gray-500 my-2">Connect to your ecommerce platform and tech stack with our ready-made plugins.</p>

                    </div>

                    <div className="py-2">
                        <button className="bg-gray-300 px-6 py-1.5 text-[15px] rounded-xl font-semibold">Get started</button>
                    </div>

                    <div className='grid grid-cols-3 space-y-2'>
                        {imageUrls.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt=""
                                width={80}
                                height={80}
                            />
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden w-1/3 bg-white h-[28rem] rounded-2xl  flex flex-col justify-between p-7">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[22px] ">Best-in-class support</h3>
                        <p className="text-gray-500 my-2">Fight fraud, manage risk, and optimise revenue..</p>
                    </div>

                    <div className="py-2">
                        <button className="bg-gray-300 px-6 py-1.5 text-[15px] rounded-xl font-semibold">Get started</button>
                    </div>

                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className="text-8xl font-extrabold">4.6</h1>

                        <div className="w-full flex items-center justify-center gap-4">

                            {['', '', '', ''].map((star, index) => (
                                <Star key={index} fill='#facc15' color='#facc15' size={40} />
                            ))}
                            <StarHalf fill='#facc15' color='#facc15' size={35} />

                        </div>
                        <div className="text-xs mt-1">
                            Trustpilot</div>

                    </div>

                </div>

                <div className="overflow-hidden w-1/3 bg-white h-[28rem] rounded-2xl  flex flex-col justify-between p-7">
                    <div className="flex flex-col ">
                        <h3 className="font-bold text-[22px] ">Ready-to-go libraries</h3>
                        <p className="text-gray-500 my-2">Use our client and server libraries for everything from JS & PHP to .NET and Python.</p>
                    </div>

                    <div className="py-2">
                        <button className="bg-gray-300 px-6 py-1.5 text-[15px] rounded-xl font-semibold">Get started</button>
                    </div>

                    <div className='grid grid-cols-3 space-y-2'>
                        {imageUrls.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt=""
                                width={80}
                                height={80}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ForBusinesses