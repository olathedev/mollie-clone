import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import BannerImageSection from "@/components/landingPage/BannerImageSection";
import CardsSection from "@/components/landingPage/CardsSection";
import CarouselSection from "@/components/landingPage/CarouselSection";
import ForBusinesses from "@/components/landingPage/ForBusinesses";
import HeroSection from "@/components/landingPage/HeroSection";
import { Button } from "@/components/ui/button";
import { AppleIcon, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {

  return (
    <main className="w-full h-screen">
      <HeroSection />

      <section className="mt-20 container mx-auto px-24">
        <div className="flex flex-col gap-2 w-[70%]">
          <h1 className="text-[55px] font-bold leading-[4rem] text-black mb-2"> One platform to get paid and simplify your finances </h1>
          <p className="text-2xl text-gray-500 w-2/3">Drive revenue, reduce costs, and manage funds on one platform. Use Mollie for online and in-person payments, subscriptions, financing, reconciliation, and to fight fraud.</p>
        </div>

        <div className="mt-14 flex gap-4">
          <div className="relative w-[32%] overflow-hidden bg-white h-[30rem] rounded-2xl  flex flex-col">
            <div className="flex flex-col p-7">
              <h3 className="font-bold text-[22px] ">Accept online payments</h3>
              <p className="text-gray-500 my-2">Win sales and drive revenue with effortless online payments.</p>
              <div className="py-2">
                <button className="bg-gray-300 px-6 py-1.5 text-[15px] rounded-xl font-semibold">Explore our solutions</button>
              </div>
            </div>


            <div className="w-full flex gap-3 absolute bottom-40 right-10 max-w-full">
              <Image
                src='https://framerusercontent.com/images/ENuFsdZ0r8rRl1eNjYKxUMPXS4.png'
                alt=""
                width={80}
                height={80}
              />
              <Image
                src='https://framerusercontent.com/images/7woeTLhN9Megge3fsNtVEpvjmI.png'
                alt=""
                width={80}
                height={80}
              />
              <Image
                src='https://framerusercontent.com/images/F89deWRWsDXQjAUlIdZPukifF4.png'
                alt=""
                width={80}
                height={80}
              />
              <Image
                src='https://framerusercontent.com/images/0fS9dHfM39Yno2Plh47koaymAsI.png'
                alt=""
                width={80}
                height={80}
              />
              <Image
                src='https://framerusercontent.com/images/NxJ1DvsVrfzQx9bBipfoMNFA3E.png'
                alt=""
                width={80}
                height={80}
              />
            </div>

            <div className="w-full flex gap-3.5 absolute bottom-16 right-0 max-w-full">
              <Image
                src='https://framerusercontent.com/images/Flxm3gL76cFlJcOnD8u7tUGHGZM.png'
                alt=""
                width={80}
                height={80}
              />
              <Image
                src='https://framerusercontent.com/images/vwGjDktTUhqcjtMMEFqgmDQ1h0.png'
                alt=""
                width={80}
                height={80}
              />
              <Image
                src='https://framerusercontent.com/images/F89deWRWsDXQjAUlIdZPukifF4.png'
                alt=""
                width={80}
                height={80}
              />
              <Image
                src='https://framerusercontent.com/images/q6RmlaNM9Nd3ZEtZpkVLgeL7Oc.png'
                alt=""
                width={80}
                height={80}
              />

            </div>
          </div>
          <div className="w-[70%] bg-white rounded-2xl">
            <div className="flex flex-col p-7">
              <h3 className="font-bold text-[22px] ">Get paid faster</h3>
              <p className="text-gray-500 my-2">Create and share secure payment links. On any channel.</p>
              <div className="py-2">
                <button className="bg-gray-300 px-6 py-1.5 text-[15px] rounded-xl font-semibold">Discover Payment Links</button>
              </div>
            </div>

          </div>
        </div>

        <div className="relative mt-6 w-full h-[32rem]  bg-black overflow-y-hidden rounded-2xl p-7 text-white flex flex-col justify-between">
          <header>
            <h2 className="text-2xl mb-1 font-semibold">Start selling in person</h2>
            <p className="text-gray-300 w-[30%] ">Offer seamless in-person payments with integrated data and devices.</p>
          </header>

          <div>
            <Button className="bg-white rounded-2xl text-black">Start now</Button>
          </div>

          <Image
            src='https://framerusercontent.com/images/jAxhusVVeuenTvJL5JnZsMWJQZI.png'
            alt=''
            height={650}
            width={650}
            className="absolute right-20 top-1 transform rotate-[-16deg] z-10"
          />

          <Image
            src='https://framerusercontent.com/images/ZIVBcDXqsS9oRktx2YPKLmGeAnY.png'
            alt=''
            width={260}
            height={260}
            quality={100}
            className="absolute left-[28rem] top-[10rem]"
          />

        </div>

        <CardsSection />
        <BannerImageSection />

      </section>

      <CarouselSection />
      <ForBusinesses />

      <div className="-mt-10 container mx-auto px-24 flex gap-4">
        <div className="w-[70%] bg-white h-[30rem] p-8 rounded-2xl">
          <div className="h-full flex flex-col gap-2 justify-end">
            <h2 className="text-2xl mb-1 font-semibold">Payments, insights, cash flow, accounting. All in one place.</h2>
            <p className="text-gray-600">Use your centralised dashboard to manage payments, get insights, access funding, and streamline accounting..</p>


            <div className="py-2">
              <button className="bg-gray-300 px-6 py-1.5 text-[15px] rounded-xl font-semibold">Discover the mollie dashboard</button>
            </div>
          </div>

        </div>

        <div className="w-[30%] bg-[#070B0F] h-[30rem] rounded-2xl flex flex-col justify-between p-6">
          <header>
            <h2 className="text-2xl mb-1 font-semibold text-white">Contact our sales team</h2>
            <p className="text-gray-300">Discover how we can help your business.</p>
            <div className="py-2">
              <button className="bg-[#2F3236] text-white px-6 py-1.5 text-[15px] rounded-xl font-semibold">Get in touch</button>
            </div>
          </header>

          <div>
            <Image
              src='https://framerusercontent.com/images/wCzBNf9rdfX2hwZnyj1xauUESg.png'
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
   
      <Footer />
    </main>
  );
}
