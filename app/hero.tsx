"use client";

import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const heroImages =[
   "/hero1.png",
   "/hero.jpg",
   "/hero2.png",
  
];


export default function Hero() {
  return (
    // <section
    //   className="relative h-screen w-full bg-cover bg-center"
    //    style={{
    //     backgroundImage: "url('/volunteer.jpg')",
    //   }}
    //   >

    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1200}
        className="absolute inset-0 z-0 h-full w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
               {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />
       </div>
       
       {/* Content */}
      <div className="absolute left-10 top-10 z-100 mx-auto flex h-full max-w-7xl items-center ">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
           <div className="max-w-3xl">

          {/* Small Heading */}
             <div className="mb-4 inline-block py-2 text-5xl font-extrabold uppercase tracking-widest">
          <span className="text-white">
            The Pan-African <br />
          </span>

          <span className="text-yellow-400">
            Child Foundation 
          </span>
          </div>

          {/* Main Heading */}

          <h1 className="text-2xl font-extrabold leading-tight text-white md:text-3xl lg:text-3xl">
            Strengthening Communities Through
            <span className="block text-yellow-400">
              Sustainable Development
            </span>
          </h1>

          {/* Paragraph */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            We are committed to empowering communities through
            education, advocacy, leadership, and sustainable
            development initiatives that create lasting impact.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/about-us/overview"
              className="rounded-full border-2 border-white px-8 hover:scale-105 hover:translate-y-3 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Learn More
            </Link>

            {/* <Link
              href="/donate"
              className="rounded-full bg-yellow-400 px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:bg-yellow-500"
            >
              Donate Now
            </Link> */}
           </div>
          </div>
        </div>
      </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </section>
  );
}