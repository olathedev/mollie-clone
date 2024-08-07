import React from 'react'

type Props = {}

const CardsSection = (props: Props) => {
  return (
    <div className="mt-6 flex gap-4">
          <div className="w-[70%] bg-white rounded-2xl">
            <div className="flex flex-col p-7">
              <h3 className="font-bold text-[22px] ">Simplify subscription payments and billing</h3>
              <p className="text-gray-500 my-2">Create flexible, scalable subscription plans and streamline billing..</p>
              <div className="py-2">
                <button className="bg-gray-300 px-6 py-1.5 text-[15px] rounded-xl font-semibold">Explore recurring payment</button>
              </div>
            </div>

          </div>
          <div className="relative w-[32%] overflow-hidden bg-white h-[28rem] rounded-2xl  flex flex-col p-7">
            <div className="flex flex-col ">
              <h3 className="font-bold text-[22px] ">More revenue, less risk</h3>
              <p className="text-gray-500 my-2">Fight fraud, manage risk, and optimise revenue..</p>
              <div className="py-2">
                <button className="bg-gray-300 px-6 py-1.5 text-[15px] rounded-xl font-semibold">Get started</button>
              </div>

              <div className="w-full absolute bottom-0">
                <div className="flex my-4 gap-6 items-center text-sm font-[500] text-gray-600">
                  <div className="inline-flex gap-1 items-center">
                    <span className="h-4 w-4 bg-[#005FFF] rounded"></span> Accepted
                  </div>

                  <div className="inline-flex gap-1 items-center">
                    <span className="h-4 w-4 bg-gray-200   rounded"></span> Fraud blocked
                  </div>
                </div>

                <div className="w-full flex gap-8">
                  <div className="w-12 rounded-t-lg bg-app bg-opacity-30 h-[10rem]">
                    <div className="relative top-4 rounded-t-lg h-full w-full bg-app">
                    </div>
                  </div>

                  <div className="w-12 rounded-t-lg bg-app bg-opacity-30 h-[10rem]">
                    <div className="relative top-4 rounded-t-lg h-full w-full bg-app">
                    </div>
                  </div>

                  <div className="w-12 rounded-t-lg bg-app bg-opacity-30 h-[10rem]">
                    <div className="relative top-4 rounded-t-lg h-full w-full bg-app">
                    </div>
                  </div>

                  <div className="w-12 rounded-t-lg bg-app bg-opacity-30 h-[10rem]">
                    <div className="relative top-4 rounded-t-lg h-full w-full bg-app">
                    </div>
                  </div>
                </div>
              </div>
            </div>





          </div>

        </div>
  )
}

export default CardsSection