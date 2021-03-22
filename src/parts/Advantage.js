import React from 'react'

export default function Advantage({ data }) {
    return (
        <section className="container mx-auto mb-24 sm:mb-18 xl:mb-16">
            <h1 className="text-5xl text-theme-blue text-center font-bold">Why Choose Us</h1>

            <p className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0">
                Why you should choose us to handle your project.
            </p>

            <div className="flex flex-col sm:flex-row">
                <div className="flex-col">
                {
                    data[0].map( item => {
                        return (
                            <div className={`flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-110`}>
                                <img src={item.imageUrl} alt="" className="w-1/3"/>
                                <div className="flex-col pl-5">
                                    <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                                    <p className="font-light text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="flex-col -mt-4 sm:mt-14">
                {
                    data[1].map( item => {
                        return (
                            <div className={`flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-110`}>
                                <img src={item.imageUrl} alt="" className="w-1/3"/>
                                <div className="flex-col pl-5">
                                    <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                                    <p className="font-light text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}
