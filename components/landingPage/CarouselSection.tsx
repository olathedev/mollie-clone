import Image from 'next/image'
import React from 'react'


const CarouselSection = () => {
    const images = [
        { image: '/slide1.jpg' },
        { image: '/slide2.jpg' },
        { image: '/slide2.jpg' },
        { image: '/slide4.jpg' },
        { image: '/slide3.jpg' },
        { image: '/slide1.jpg' },
        { image: '/slide1.jpg' },
        { image: '/slide2.jpg' },


    ]
    return (
        <div className="mt-20 w-full h-full">
            <div className="flex flex-col gap-2 container mx-auto px-24">
                <h1 className="text-[55px] w-[60%]  font-bold leading-[4rem] text-black mb-2">A trusted partner for businesses in Europe</h1>
                <p className="text-2xl text-gray-500 ">Meet the companies that use our solution to power growth..</p>
            </div>
            <div className="w-full overflow-hidden whitespace-nowrap mt-8">
                <div className="inline-block animate-marquee">
                    {images.map((image, index) => (
                        <div key={index} className="inline-block mx-2 h-[30rem] w-[20rem]">

                            <Image
                                src={image.image}
                                alt=""
                                width={300}
                                height={800}
                                objectFit="contain"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default CarouselSection