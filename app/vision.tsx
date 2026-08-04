// export default function (){
//     return(
//         <section className="bg-amber-50">
//             <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
//                 {/* left side */}
//                 <div>
//                     <h1 className="bg-yellow-100 text-yellow-600  font-semibold tracking-wider rounded-full w-30 text-center place-content-center inline-block">
//                         OUR VISION
//                     </h1>
//                      <h1 className="text-black font-bold text-5xl pt-7">
//                         Building a legacy of <br />
//                         transparent and trust
//                      </h1>
//                      <p className="text-black text-xl pt-7">
//                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br />
//                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br />
//                         xxxxxxxxxxxxxxxxxxxxxxxxxxxx <br />
//                         xxxxxxxxxxxxxxxxxxxxxxxxxx  <br />
//                      </p>
//                 </div>

//             </div>

//         </section>
//     )
// }

// export default function () {
//     return (
//         <section>
//             <div className="bg-amber-50 place-self-center text-center rounded-3xl h-75 w-200 shadow-amber-500 shadow-sm">
//                 <h1 className="text-xl font-semibold bg-yellow-100 text-yellow-800 inline-block track-wider uppercase mt-4 rounded-2xl w-40">
//                     our vision
//                 </h1>
//                 <h1 className="text-black font-bold text-5xl pt-7">
//                     Building a legacy of <br />
//                       transparent and trust
//                 </h1>
//                 <p className="text-black text-xl pt-5">
//                     XXXXXXXXXXXXXXXXXXXXXXXX <br />
//                     XXXXXXXXXXXXXXXXXXXXXXXX <br />
//                     XXXXXXXXXXXXXXXXXXXXXXXX 
//                 </p>
//             </div>

//         </section>
//     )
// }



export default function Vision() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-amber-50 p-8 text-center shadow-lg md:p-14">

          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-700">
            Our Vision
          </span>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Building a Legacy of
            <br />
            <span className="text-yellow-500">
              Transparency & Trust
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            {/* We envision a future where every community has equal
            access to quality education, healthcare, and sustainable
            opportunities. Through transparency, accountability, and
            collaboration, we are building lasting partnerships that
            inspire hope and create meaningful impact for generations
            to come. */}

            We envision a world where every child is valued, respected, and supported, 
            and where every child has the chance to grow up happy, healthy, and full 
            of hope. We believe that by investing in our youngest generation, we can 
            create a better future. Charity Begins at Home with The Child.
          </p>

         {/* link should be here */}
          <button className="mt-10 rounded-full bg-yellow-500 px-8 py-4 font-semibold cursor-pointer text-black transition-all duration-300 hover:translate-y-1 hover:bg-yellow-400">
            Join Our Mission
          </button>

        </div>
      </div>
    </section>
  );
}