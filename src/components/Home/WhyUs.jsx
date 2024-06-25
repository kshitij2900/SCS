import React from 'react'
import Image from "next/image";
import H1 from "/assets/WhyChooseUs/whyChooseUs.png";
import S1 from "/assets/WhyChooseUs/Approach.svg";
import S2 from "/assets/WhyChooseUs/Delivery.svg";
import S3 from "/assets/WhyChooseUs/Experience.svg";
import S4 from "/assets/WhyChooseUs/Pricing.svg";
import S5 from "/assets/WhyChooseUs/Support.svg";
import S6 from "/assets/WhyChooseUs/Products.svg";


const features = [
    {
        title: "Experience",
        para: "Leverage Syntalix Solutions extensive IT expertise and proven track record of success.",
        href: "#",
        svg: S1,
        class: 'lg:-mr-24'
    },
    {
        title: "Products",
        para: "Access a comprehensive range of cutting-edge IT solutions tailored to your business needs.",
        href: "#",
        svg: S2,
        class: 'lg:-mr-10'
    },
    {
        title: "Approach",
        para: "Experience personalized and dedicated support services prioritizing client satisfaction and success.",
        href: "#",
        svg: S3,
        class: 'lg:-mr-24'
    },
    {
        title: "Pricing",
        para: "Benefit from cost-effective solutions maintaining the highest quality standards.",
        href: "#",
        svg: S4,
        class: 'lg:-ml-24'
    },
    {
        title: "Delivery",
        para: "Expect timely and efficient delivery of reliable solutions, consistently meeting and exceeding expectations.",
        href: "#",
        svg: S5,
        class: 'lg:-ml-10'
    },
    {
        title: "Support",
        para: "Receive continuous assistance and support, ensuring seamless solutions and maintaining 99.9% client satisfaction.",
        href: "#",
        svg: S6,
        class: 'lg:-ml-24'
    },
];

const Whyus = () => {
    return (
        <section className="relative isolate bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-full px-4 md:max-w-[90%] lg:px-8">
                <div className="flex items-center justify-center flex-col gap-6">
                    <p className="text-center font-semibold leading-7 uppercase bg-custom-gradient rounded-xl w-fit px-3 py-0 text-white lg:text-left text-xs">
                        Our Values
                    </p>
                    <h2 className='text-4xl font-cabm text-black md:text-6xl max-w-lg text-center font-semibold'>
                        Why <span className='text-[#4812E4]'> Choose Us</span>.
                    </h2>
                    <p className="my-auto max-w-2xl text-base text-gray-700 text-center md:text-lg">
                    Discover Us: Why We are Your Best Choice
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-2xl md:mt-10 lg:max-w-full">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">

                        <dl className='flex flex-col w-full gap-10 lg:gap-16 mt-3'>
                            {features.slice(0, 3).map((feature, i) => (
                                <div key={i} className={`flex md:flex-row-reverse items-center gap-4 ${feature.class}`}>
                                    <dt className="h-auto">
                                        <Image
                                            src={feature.svg}
                                            alt={feature.title}
                                            className="w-24 my-auto"
                                        />
                                    </dt>
                                    <dd className="flex flex-auto flex-col gap-2 text-left md:text-right w-full">

                                        <h3 className="text-2xl text-black font-semibold font-cabr">
                                            {feature.title}
                                        </h3>

                                        <p className="text-base text-gray-700">{feature.para}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <div className=' flex items-center justify-center'>
                            <Image
                                src={H1}
                                alt='H1'
                                className='w-[22rem]'
                            />
                        </div>
                        <div className='flex flex-col w-full gap-10 md:gap-12 mt-3'>
                            {features.slice(3).map((feature, i) => (
                                <div key={i} className={`flex flex-row items-center md:py-0.5 gap-4 ${feature.class}`}>
                                    <dt className="h-auto">
                                        <Image
                                            src={feature.svg}
                                            alt={feature.title}
                                            className="w-24 my-auto"
                                        />
                                    </dt>
                                    <dd className="flex flex-auto flex-col gap-2 text-left w-full">

                                        <h3 className="text-2xl text-black font-semibold font-cabr">
                                            {feature.title}
                                        </h3>

                                        <p className="text-base text-gray-700">{feature.para}</p>

                                    </dd>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whyus