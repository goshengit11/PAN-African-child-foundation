"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";


/* =========================
   PROJECT IMAGES
========================= */

const orphanageImages = [
  "/wafa1.png",
  "/wafa2.png",
  "/wafa3.png",
  "/keysey11.png",
  "/keysey22.png",
  "/keysey3.png",
];

const blindCommunityImages = [
  "/bc1.png",
  "/bc2.png",
  "/bc3.png",
  "/bc4.png",
  "/bc5.png",
  "/bc6.png",
  "/bc7.png",
];

const educationImages = [
  "/edu1.png",
  "/edu2.png",
  "/edu3.png",
  "/edu4.png",
  "/edu5.png",
];

const foodImages = [
  "/ak1.png",
  "/food2.png",
  "/food3.png",
];

const lessPrivilegedImages = [
  "/lessprivileged1.png",
  "/lessprivileged2.png",
  "/lessprivileged3.png",
];


/* =========================
   IMAGE SLIDER COMPONENT
========================= */

function ProjectSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="relative h-[350px] w-full overflow-hidden sm:h-[450px] lg:h-[520px]">

      <Swiper
  modules={[Autoplay, EffectFade]}
  effect="fade"
  loop={true}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  speed={1000}
  className="w-full h-[500px] md:h-[700px]"
>
  {images.map((image, index) => (
    <SwiperSlide key={index} className="relative h-full w-full">
      <img
        src={image}
        alt={`${title} ${index + 1}`}
        className="block h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />
    </SwiperSlide>
  ))}
</Swiper>

      {/* Slider Label */}
      <div className="absolute bottom-5 left-5 z-20 rounded-full bg-black/70 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        {title}
      </div>

    </div>
  );
}


/* =========================
   MAIN PAGE
========================= */

export default function ProjectsImpact() {
  return (
    <div className="min-h-screen bg-white">

      {/* =========================
          BLACK TOP SECTION
      ========================= */}

      <div className="bg-black">

        <Navbar />

        <section className="px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-28">

          <div className="mx-auto max-w-7xl">

            {/* PAGE INTRO */}

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Our Impact
              </p>

              <h1 className="mt-5 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl md:text-6xl">
                Projects &
                <span className="block text-yellow-400">
                  Impact
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 bg-yellow-400" />

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                Through our outreach programmes and community initiatives,
                we continue to create opportunities to show love, provide
                support and make a meaningful difference in the lives of
                children and vulnerable communities.
              </p>

            </div>

          </div>

        </section>

      </div>


      {/* =========================
          PROJECT 1
      ========================= */}

      <section className="px-6 py-16 sm:px-10 lg:px-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-[2rem] bg-gray-50 shadow-xl lg:grid-cols-2">

            {/* TEXT */}

            <div className="order-2 flex items-center p-8 sm:p-12 lg:order-1 lg:p-16">

              <div>

                <div className="flex items-center gap-3">

                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
                    Our Impact
                  </span>

                  <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
                    2023
                  </span>

                </div>

                <h2 className="mt-5 text-3xl font-extrabold uppercase leading-tight text-black sm:text-4xl">
                  Visits to
                  <span className="block text-yellow-500">
                    Orphanage Homes
                  </span>
                </h2>

                <div className="mt-6 h-1 w-16 bg-yellow-400" />

                <p className="mt-6 leading-8 text-gray-600">
                  We visit orphanages to show love, care and support to
                  children who need it most.
                </p>


                {/* Waafah */}

                <div className="mt-8 border-l-2 border-yellow-400 pl-5">

                  <h3 className="text-lg font-bold text-black">
                    Waafah Orphanage Home, Ilorin
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    Our team visited the Waafah Orphanage Home in Ilorin,
                    where we spent time with the children, played games,
                    and distributed gifts and essential items.
                  </p>

                </div>


                {/* Kersey */}

                <div className="mt-7 border-l-2 border-yellow-400 pl-5">

                  <h3 className="text-lg font-bold text-black">
                    Kersey Children's Home
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    We also visited the Kersey Children's Home, where we
                    engaged in fun activities with the kids, provided food
                    and clothing, and offered words of encouragement.
                  </p>

                </div>

              </div>

            </div>


            {/* SLIDER */}

            <div className="order-1 lg:order-2">

              <ProjectSlider
                images={orphanageImages}
                title="Orphanage Visits"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECT 2
      ========================= */}

      <section className="bg-gray-100 px-6 py-16 sm:px-10 lg:px-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-[2rem] bg-black shadow-xl lg:grid-cols-2">

            {/* SLIDER */}

            <div>

              <ProjectSlider
                images={blindCommunityImages}
                title="Blind Community Visit"
              />

            </div>


            {/* TEXT */}

            <div className="flex items-center p-8 sm:p-12 lg:p-16">

              <div>

                <div className="flex items-center gap-3">

                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                    Our Impact
                  </span>

                  <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
                    2023
                  </span>

                </div>

                <h2 className="mt-5 text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                  Visit to the
                  <span className="block text-yellow-400">
                    Blind Community
                  </span>
                </h2>

                <div className="mt-6 h-1 w-16 bg-yellow-400" />

                <h3 className="mt-7 text-xl font-bold text-white">
                  Spending Time with the Blind
                </h3>

                <p className="mt-4 leading-8 text-gray-300">
                  Our team visited the blind community, where we spent
                  quality time with the individuals, engaged in
                  conversations, and provided support and assistance.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECT 3
      ========================= */}

      <section className="px-6 py-16 sm:px-10 lg:px-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-[2rem] bg-yellow-400 shadow-xl lg:grid-cols-2">

            {/* TEXT */}

            <div className="flex items-center p-8 sm:p-12 lg:p-16">

              <div>

                <div className="flex items-center gap-3">

                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-black">
                    Education
                  </span>

                  <span className="rounded-full bg-black px-4 py-1 text-sm font-bold text-yellow-400">
                    2020
                  </span>

                </div>

                <h2 className="mt-5 text-3xl font-extrabold uppercase leading-tight text-black sm:text-4xl">
                  Educate the Child 
                  {/* <span className="block">
                   
                  </span> */}
                </h2>

                <div className="mt-6 h-1 w-16 bg-black" />

                <p className="mt-6 leading-8 text-gray-800">
                  Our education-focused outreach
                  reflects our commitment to supporting
                  children and helping create opportunities for learning
                  and development.

                </p>

              </div>

            </div>


            {/* SLIDER */}

            <div className="bg-black">

              <ProjectSlider
                images={educationImages}
                title="Education Outreach"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          OTHER OUTREACH ACTIVITIES
      ========================= */}

      <section className="bg-gray-100 px-6 py-16 sm:px-10 lg:px-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600">
              More Impact
            </p>

            <h2 className="mt-4 text-3xl font-extrabold uppercase text-black sm:text-4xl">
              Other Outreach
              <span className="text-yellow-500">
                {" "}Activities
              </span>
            </h2>

            <div className="mt-5 h-1 w-16 bg-yellow-400" />

          </div>


          {/* Food / School / Clothing */}

          <div className="mt-12 grid overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-2">

            <div>

              <ProjectSlider
                images={foodImages}
                title="Food & Material Distribution"
              />

            </div>


            <div className="flex items-center p-8 sm:p-12 lg:p-14">

              <div>

                <h3 className="text-2xl font-extrabold uppercase text-black sm:text-3xl">
                  Food, School Materials
                  <span className="block text-yellow-500">
                    and Clothing Distribution
                  </span>
                </h3>

                <div className="mt-5 h-1 w-14 bg-yellow-400" />

                <p className="mt-6 leading-8 text-gray-600">
                  We have distributed food and clothing to various
                  communities and schools at Akufo Ibadan, aiming to
                  alleviate poverty and provide basic necessities.
                </p>

              </div>

            </div> 

          </div>


          {/* Less Privileged */}

          {/* <div className="mt-10 grid overflow-hidden rounded-[2rem] bg-black shadow-xl lg:grid-cols-2">

            <div className="order-2 flex items-center p-8 sm:p-12 lg:order-1 lg:p-14">

              <div>

                <h3 className="text-2xl font-extrabold uppercase text-white sm:text-3xl">
                  Spending Time with the
                  <span className="block text-yellow-400">
                    Less Privileged
                  </span>
                </h3>

                <div className="mt-5 h-1 w-14 bg-yellow-400" />

                <p className="mt-6 leading-8 text-gray-300">
                  Our team has spent time with the less privileged,
                  engaging in activities, providing emotional support,
                  and showing love and care.
                </p>

              </div>

            </div>


            <div className="order-1 lg:order-2">

              <ProjectSlider
                images={lessPrivilegedImages}
                title="Community Support"
              />

            </div>

          </div> */}

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

    </div>
  );
}




// "use client";

// import Navbar from "../components/navbar";
// import Footer from "../components/footer";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";

// const images = [
//   "/wafa1.png",
//   "/wafa2.png",
//   "/wafa3.png",
//   "/keysey1.png",
//   "/keysey2.png",
// ];

// export default function () {
//   return (
//    <div className="min-h-screen bg-white">
//       <div className="bg-black">
//       <Navbar />

//       <section className="px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
//         <div className="mx-auto max-w-7xl">

//           <div className="grid min-h-[550px] grid-cols-1 overflow-hidden rounded-[2rem] bg-black shadow-2xl md:grid-cols-2">

//             {/* LEFT - TEXT */}
//             <div className="flex items-center px-8 py-14 sm:px-12 lg:px-16">
//               <div className="max-w-xl">

//                 {/* Heading + Year */}
//                 <div className="flex flex-wrap items-center gap-3">
//                   <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
//                     Our Impact
//                   </span>
//                 </div>

//                 <h1 className="mt-5 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
//                   Visits to
//                   <span className="block text-yellow-400">
//                     Orphanages
//                   </span>
//                    <span className="rounded-full bg-white py-1 px-3 text-xs font-bold text-black">
//                     2023
//                   </span>
//                 </h1>

//                 <div className="mt-6 h-1 w-20 bg-yellow-400" />

//                 <p className="mt-6 text-base leading-7 text-gray-300">
//                   We visit orphanages to show love, care and support to
//                   children who need it most.
//                 </p>


//                 {/* Waafah Orphanage */}
//                 <div className="mt-8 border-l-2 border-yellow-400 pl-5">

//                   <h2 className="text-lg font-bold text-white sm:text-xl">
//                     Waafah Orphanage Home, Ilorin
//                   </h2>

//                   <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base">
//                     Our team visited the Waafah Orphanage Home in Ilorin,
//                     where we spent time with the children, played games,
//                     and distributed gifts and essential items.
//                   </p>

//                 </div>


//                 {/* Kersey Children's Home */}
//                 <div className="mt-7 border-l-2 border-yellow-400 pl-5">

//                   <h2 className="text-lg font-bold text-white sm:text-xl">
//                     Kersey Children's Home
//                   </h2>

//                   <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base">
//                     We also visited the Kersey Children's Home, where we
//                     engaged in fun activities with the kids, provided food
//                     and clothing, and offered words of encouragement.
//                   </p>

//                 </div>

//               </div>
//             </div>


//             {/* RIGHT - IMAGE SLIDER */}
//             <div className="relative min-h-[350px] overflow-hidden md:min-h-full">

//               <Swiper
//                 modules={[Autoplay, EffectFade]}
//                 effect="fade"
//                 loop={true}
//                 autoplay={{
//                   delay: 4000,
//                   disableOnInteraction: false,
//                 }}
//                 speed={1000}
//                 className="h-full w-full"
//               >

//                 {images.map((image, index) => (
//                   <SwiperSlide key={index}>

//                     <div className="relative h-full min-h-[350px] w-full">

//                       <img
//                         src={image}
//                         alt={`Orphanage visit ${index + 1}`}
//                         className="h-full w-full object-cover"
//                       />

//                       <div className="absolute inset-0 bg-black/20" />

//                     </div>

//                   </SwiperSlide>
//                 ))}

//               </Swiper>

//               {/* Image Label */}
//               <div className="absolute bottom-6 left-6 z-20 rounded-full bg-black/70 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
//                 Our Outreach — 2023
//               </div>

//             </div>

//           </div>

//         </div>
//       </section>

//       <Footer />
//     </div>
//     </div>
//   );
// }




// import Navbar from "../components/navbar";
// import Footer from "../components/footer";

// import {Swiper, SwiperSlide} from "swiper/react";
// import {Autoplay,EffectFade} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";

// const images =[
//     "/wafa1.png",
//     "/wafa2.png",
//     "/wafa3.png",
//     "/keysey1.png",
//     "/keysey2.png",
// ]
// export default function () {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />

//       <section className="px-6 py-16 sm:px-10 lg:px-20">
//         <div className="mx-auto max-w-6xl">

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

//             {/* Left */}
//             <div className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">

//               <div className="mb-6 h-1 w-16 rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-24" />

//               <h1 className="text-2xl font-bold uppercase tracking-wide text-black sm:text-3xl">
//                 Visits to Orphanages
//               </h1>

//               <p className="mt-5 text-base leading-7 text-gray-600">
//                 We visit orphanages to show love, care and support to children
//                 who need it most.
//               </p>

//             </div>
//             {/* right */}
//                <div className="space-y-10">
                
//                </div>
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


// import Navbar from "../components/navbar"
// import Footer from "../components/footer"
// export default function () {
//     return(
//        <div className="min-h-screen">
//         <Navbar/>
//             <section>
//                 <div className="mx-auto grid grid-cols-2 gap-10">
//                     {/* left */}
//                  <div className="bg-white drop-shadow-black">
//                     <h1>Visits to Orphanages</h1>


//                  </div>
//                 </div>
//             </section>
//             <Footer/>
//           </div>
       
//     )
// }

{/* <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20"> */}

            {/* Left */}
            // <div className="lg:sticky lg:top-24 lg:self-start">

            //   <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
            //     Our History
            //   </span>

            //   <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
            //     A small step
            //     <span className="block text-yellow-500">
            //       became a movement.
            //     </span>
            //   </h2>

            //   <div className="mt-8 h-1 w-20 bg-yellow-500" />

            //   <p className="mt-6 leading-8 text-gray-600">
            //     From a simple idea to a growing movement, our journey has
            //     always been guided by compassion, service and a commitment
            //     to creating a better future for children.
            //   </p>

            // </div>


            {/* Right */}
            // <div className="space-y-8">

            //   <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7 shadow-sm sm:p-10">
            //     <div className="mb-6 flex items-center gap-4">
            //       <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
            //         <Heart size={25} />
            //       </div>

            //       <div>
            //         <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
            //           Where it began
            //         </p>

            //         <h3 className="text-xl font-bold">
            //           September 29, 2019
            //         </h3>
            //       </div>
            //     </div>

            //     <div className="space-y-5 text-base leading-8 text-gray-600">
            //       <p>
            //         A little step at a time, we started our journey with a
            //         simple desire to serve others. We began the Child Online
            //         Foundation on September 29, 2019, following the formation
            //         of a WhatsApp group that existed from August 2019 under
            //         the name September Speaks Charity.
            //       </p>

            //       <p>
            //         September Speaks Charity was an annual charity initiative
            //         centred around celebrating people born in September while
            //         extending kindness and support to people in need.
            //       </p>

            //       <p>
            //         What began as a small gathering of volunteers gradually
            //         grew into a broader vision: creating a foundation that
            //         would consistently provide support, resources, hope and
            //         opportunities for vulnerable children.
            //       </p>
            //     </div>
            //   </div>


              {/* First Visit */}
            //   <div className="grid gap-6 sm:grid-cols-2">

            //     <div className="rounded-3xl bg-black p-7 text-white sm:p-8 shadow-2xl">
            //       <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-black">
            //         <Users size={24} />
            //       </div>

            //       <p className="text-4xl font-extrabold text-yellow-400">
            //         21+
            //       </p>

            //       <h3 className="mt-2 text-lg font-bold">
            //         Early Volunteers
            //       </h3>

            //       <p className="mt-3 text-sm leading-6 text-gray-400">
            //         Passionate volunteers joined the foundation's early
            //         activities and helped establish its culture of service.
            //       </p>
            //     </div>


            //     <div className="rounded-3xl bg-yellow-50 p-7 sm:p-8 shadow-2xl">
            //       <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-black">
            //         <Home size={24} />
            //       </div>

            //       <p className="text-xl font-extrabold uppercase">
            //         Kersey Children's Home
            //       </p>

            //       <p className="mt-3 text-sm leading-6 text-gray-600">
            //         One of the foundation's early charity visits brought
            //         gifts, food items, toys and other resources to children
            //         in need.
            //       </p>
            //     </div>

            //   </div>


              {/* Continuing the Journey */}
    //           <div className="rounded-3xl border border-gray-100 p-7 sm:p-10">

    //             <h3 className="text-2xl font-bold">
    //               From celebration to a bigger mission
    //             </h3>

    //             <div className="mt-5 space-y-5 leading-8 text-gray-600">

    //               <p>
    //                 The first charity visit was a meaningful experience.
    //                 Seeing the happiness and warmth created by a small act
    //                 of kindness inspired the foundation's leadership and
    //                 volunteers to think beyond a single annual celebration.
    //               </p>

    //               <p>
    //                 The vision became clear: charity should not be limited
    //                 to one day or one occasion. It should become an ongoing
    //                 commitment to children and communities that need support.
    //               </p>

    //               <p>
    //                 The foundation therefore opened its doors to members of
    //                 the general public who share the same passion for
    //                 service. Students, adults, teenagers and working
    //                 professionals have continued to contribute their time,
    //                 skills and resources.
    //               </p>

    //               <p>
    //                 Today, our journey continues with the hope of reaching
    //                 even more people and creating a lasting impact in the
    //                 lives of children and vulnerable communities.
    //               </p>

    //             </div>

    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </section>
