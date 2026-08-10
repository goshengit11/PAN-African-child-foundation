// "use client"
// import{
//     FaWhatsapp,
//     FaFacebookF,
//     FaInstagram,
// } from "react-icons/fa";



// export default function() {
//     return(
//       <footer className="bg-black max-h-7xl w-full text-white hover:text-yellow-500">
//            <div className="grid grid-4 gap-5 ml-10">
//               <div>
//                 <h1>
//                     Brand name
//                 </h1>
//                 <p>
//                     xxxxxxxxxxxx
//                 </p>
                   
//                    <div className="flex gap-4 text-2xl text-yellow-500 hover:scale-110 transition ease-in-out">
//                       <FaWhatsapp/>
//                       <FaFacebookF className=""/>
//                       <FaInstagram/>
//                    </div>
//               </div>
//               {/* grid 2 */}
//                 <div>
//                     <h1>Organization</h1>
//                 </div>
//            </div>
//       </footer>

//     )
// }



"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import{
    Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-8xl px-6 py-16">

        <div className="grid gap-8 mx-7 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold  text-yellow-500">
             BrandName
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              We are committed to empowering communities through
              education, healthcare, advocacy and sustainable
              development initiatives that create lasting impact.
            </p>

            {/* <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                <FaInstagram />
              </a>

            </div> */}
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400 cursor-pointer">

              <li>
                <Link href="/" className="hover:text-yellow-500">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about-us/overview" className="hover:text-yellow-500">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/projects" className="hover:text-yellow-500">
                  Projects & Impact
                </Link>
              </li>

              <li>
                <Link href="/publications" className="hover:text-yellow-500">
                  Publications
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-500">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Programmes */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Our Programmes
            </h3>

            <ul className="space-y-4 text-gray-400 cursor-pointer">

              <li className="hover:text-yellow-500">Quality Education</li>

              <li className="hover:text-yellow-500">Healthcare Access</li>

              <li className="hover:text-yellow-500">Sustainability</li>

              <li className="hover:text-yellow-500">Women Empowerment</li>

              <li className="hover:text-yellow-500">Youth Development</li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-400">

              <p>
                Address: Ogbomoso, Oyo State, Nigeria
              </p>

              <p>
                Email:xxxxxxx
              </p>

              <p>
                Tel: xxxxxx
              </p>


             <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                <FaInstagram />
              </a>

            </div>


              {/* <div className="mt-6">
  <h4 className="mb-3 text-lg font-semibold text-white">
    Subscribe to Our Newsletter
  </h4>

  <p className="mb-4 text-sm leading-6 text-gray-400">
    Get updates on our projects, events, publications, and community impact delivered to your inbox.
  </p>

  <form className="space-y-3">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-full border border-gray-700 bg-gray-900 px-5 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-yellow-500"
    />

    <button
      type="submit"
      className="w-full rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
    >
      Subscribe Now
    </button>
  </form>
</div> */}

            </div>
          </div>

<div className="">
  <h3 className="text-lg font-bold tracking-wide text-white">
    Newsletter
  </h3>

  <p className="mt-4 text-yellow-500 font-bold leading-7">
       Be the first to get exciting
         news from Us
  </p>

  <form className="mt-6 flex w-full overflow-hidden rounded-md">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 bg-white text-center py-4 text-black outline-none placeholder:text-gray-500"
    />

    <button
      type="submit"
      className="bg-yellow-500 px-2 font-bold text-sm text-black transition-all duration-300 hover:bg-yellow-400"
    >
      Subscribe
    </button>
  </form>
</div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-gray-800 pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Brandname All Rights Reserved.
            </p>

            <div className="flex gap-6">

              <Link href="#" className="hover:text-yellow-500">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-yellow-500">
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}