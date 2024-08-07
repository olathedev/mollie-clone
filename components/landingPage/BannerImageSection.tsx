import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { AppleIcon, ChevronRight } from 'lucide-react'

type Props = {}

const BannerImageSection = (props: Props) => {
  return (
    
    <div className="mt-6  bg-[url('/groceries.jpg')] bg-center bg-cover bg-no-repeat rounded-2xl w-full h-[30rem] ">
    <div className="relative h-full w-full bg-black rounded-2xl bg-opacity-20  flex flex-col justify-between p-10">
      <header>
        <h2 className="text-2xl mb-1 font-semibold">Start selling in person</h2>
        <p className="text-gray-900 w-[30%] ">Offer seamless in-person payments with integrated data and devices.</p>
      </header>

      <div>
        <Button className="bg-white rounded-2xl text-black font-[500]">Discover checkout</Button>
      </div>

      <div className="absolute right-[10rem] top-28 z-20 flex flex-col items-center gap-4">
        <Image
          src='/crisp.png'
          alt=""
          quality={100}
          width={90}
          height={90}
          className="rounded-lg"
        />

        <div className="w-[18rem] p-6  rounded-xl bg-white flex flex-col space-y-6">
          <Button className="bg-black text-white rounded-lg w-full flex gap-2"><AppleIcon size={15} /> Pay</Button>
          <div className="flex items-center justify-between">
            <div>
              <span></span>
              <span>Mastercard</span>
            </div>

            <ChevronRight size={20} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span></span>
              <span>Mastercard</span>
            </div>

            <ChevronRight size={20} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span></span>
              <span>Mastercard</span>
            </div>

            <ChevronRight size={20} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span></span>
              <span>Mastercard</span>
            </div>

            <ChevronRight size={20} />
          </div>
        </div>


      </div>
    </div>
  </div>

  )
}

export default BannerImageSection