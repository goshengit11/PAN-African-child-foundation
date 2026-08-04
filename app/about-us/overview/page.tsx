"use client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import {
  Heart,
  Target,
  Eye,
  Users,
  GraduationCap,
  HandHeart,
  ShieldCheck,
  Lightbulb,
  Scale,
  Megaphone,
  Stethoscope,
  Home,
  BookOpen,
  CheckCircle2,
  Palette,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div>
        <Navbar/>
    
    <main className="bg-white text-gray-900">


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-yellow-950/40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl">

            <span className="mb-5 inline-block rounded-full bg-yellow-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              About Us
            </span>

            <h1 className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our Story.
              <br />
              <span className="text-yellow-400">
                Our Purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              The Child Online Foundation is a nonprofit, nongovernmental
              organization dedicated to serving, supporting, protecting and
              empowering children and vulnerable communities.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          HISTORY
      ===================================================== */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">

            {/* Left */}
            <div className="lg:sticky lg:top-24 lg:self-start">

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
                Our History
              </span>

              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
                A small step
                <span className="block text-yellow-500">
                  became a movement.
                </span>
              </h2>

              <div className="mt-8 h-1 w-20 bg-yellow-500" />

              <p className="mt-6 leading-8 text-gray-600">
                From a simple idea to a growing movement, our journey has
                always been guided by compassion, service and a commitment
                to creating a better future for children.
              </p>

            </div>


            {/* Right */}
            <div className="space-y-8">

              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7 shadow-sm sm:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
                    <Heart size={25} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
                      Where it began
                    </p>

                    <h3 className="text-xl font-bold">
                      September 29, 2019
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 text-base leading-8 text-gray-600">
                  <p>
                    A little step at a time, we started our journey with a
                    simple desire to serve others. We began the Child Online
                    Foundation on September 29, 2019, following the formation
                    of a WhatsApp group that existed from August 2019 under
                    the name September Speaks Charity.
                  </p>

                  <p>
                    September Speaks Charity was an annual charity initiative
                    centred around celebrating people born in September while
                    extending kindness and support to people in need.
                  </p>

                  <p>
                    What began as a small gathering of volunteers gradually
                    grew into a broader vision: creating a foundation that
                    would consistently provide support, resources, hope and
                    opportunities for vulnerable children.
                  </p>
                </div>
              </div>


              {/* First Visit */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div className="rounded-3xl bg-black p-7 text-white sm:p-8 shadow-2xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-black">
                    <Users size={24} />
                  </div>

                  <p className="text-4xl font-extrabold text-yellow-400">
                    21+
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    Early Volunteers
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Passionate volunteers joined the foundation's early
                    activities and helped establish its culture of service.
                  </p>
                </div>


                <div className="rounded-3xl bg-yellow-50 p-7 sm:p-8 shadow-2xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-black">
                    <Home size={24} />
                  </div>

                  <p className="text-xl font-extrabold uppercase">
                    Kersey Children's Home
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    One of the foundation's early charity visits brought
                    gifts, food items, toys and other resources to children
                    in need.
                  </p>
                </div>

              </div>


              {/* Continuing the Journey */}
              <div className="rounded-3xl border border-gray-100 p-7 sm:p-10">

                <h3 className="text-2xl font-bold">
                  From celebration to a bigger mission
                </h3>

                <div className="mt-5 space-y-5 leading-8 text-gray-600">

                  <p>
                    The first charity visit was a meaningful experience.
                    Seeing the happiness and warmth created by a small act
                    of kindness inspired the foundation's leadership and
                    volunteers to think beyond a single annual celebration.
                  </p>

                  <p>
                    The vision became clear: charity should not be limited
                    to one day or one occasion. It should become an ongoing
                    commitment to children and communities that need support.
                  </p>

                  <p>
                    The foundation therefore opened its doors to members of
                    the general public who share the same passion for
                    service. Students, adults, teenagers and working
                    professionals have continued to contribute their time,
                    skills and resources.
                  </p>

                  <p>
                    Today, our journey continues with the hope of reaching
                    even more people and creating a lasting impact in the
                    lives of children and vulnerable communities.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section className="bg-gray-100 px-6 py-20 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
              Our Commitment
            </span>

            <h2 className="mt-4 text-3xl font-extrabold uppercase sm:text-4xl">
              What drives our work
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We work to create meaningful opportunities and provide
              practical support for children and communities.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Card */}
            <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 transition group-hover:bg-yellow-500 group-hover:text-black">
                <GraduationCap size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Education
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Providing educational support, resources and opportunities
                that help children develop their abilities and pursue their
                dreams.
              </p>

            </div>


            <div className="group rounded-3xl cursor-pointer bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 transition group-hover:bg-yellow-500 group-hover:text-black">
                <Stethoscope size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Healthcare
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Supporting access to essential healthcare services,
                wellness initiatives and basic amenities for vulnerable
                communities.
              </p>

            </div>


            <div className="group rounded-3xl bg-white p-8 cursor-pointer shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 transition group-hover:bg-yellow-500 group-hover:text-black">
                <ShieldCheck size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Child Protection
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Promoting safe and nurturing environments where children
                can grow, learn and develop without fear of harm.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION + VISION
      ===================================================== */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Mission */}
            <div className="relative overflow-hidden rounded-[2rem] bg-black p-8 text-white sm:p-12">

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-500/20" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-black">
                  <Target size={28} />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                  Our Mission
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Creating opportunities for every child
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-gray-300">

                  <p>
                    Our mission is to create a world where every child has
                    access to education, support and basic amenities needed
                    to realize their dreams.
                  </p>

                  <p>
                    We are committed to protecting children from harm and
                    promoting the special protection and care to which they
                    are entitled.
                  </p>

                  <p>
                    We strive to provide safe and nurturing environments
                    where children can receive the love, support and
                    education they need to thrive.
                  </p>

                  <p>
                    We are dedicated to empowering vulnerable children,
                    orphans, homeless children, street-connected children
                    and children living in poverty.
                  </p>

                </div>

              </div>

            </div>


            {/* Vision */}
            <div className="rounded-[2rem] bg-yellow-400 p-8 sm:p-12">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-black">
                <Eye size={28} />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-yellow-700">
                Our Vision
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                A brighter future for every child
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                We envision a world where every child is valued, respected
                and supported, and where every child has the opportunity to
                grow up happy, healthy and full of hope.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                We believe that investing in our youngest generation helps
                create a stronger and better future for everyone.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

                <p className="text-lg font-bold italic text-gray-900">
                  "Charity Begins at Home with The Child."
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORE VALUES
      ===================================================== */}
      <section className="bg-black px-6 py-20 text-white lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              What We Stand For
            </span>

            <h2 className="mt-4 text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl">
              Our Core Values
            </h2>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {[
              {
                icon: Heart,
                title: "Compassion",
                text: "We care deeply about the people and communities we serve.",
              },
              {
                icon: Lightbulb,
                title: "Empowerment",
                text: "We create opportunities that help people build better futures.",
              },
              {
                icon: Scale,
                title: "Equality",
                text: "Every child deserves dignity, opportunity and respect.",
              },
              {
                icon: ShieldCheck,
                title: "Integrity",
                text: "We value honesty, accountability and responsible service.",
              },
              {
                icon: Users,
                title: "Community",
                text: "We believe lasting change happens when people work together.",
              },
            ].map((value) => {

              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-3xl border border-gray-800 bg-gray-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500"
                >

                  <Icon
                    size={30}
                    className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />

                  <h3 className="mt-6 text-lg font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {value.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          LOGO REPRESENTATION
      ===================================================== */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Logo placeholder */}
            <div className="flex min-h-87.5 items-center justify-center rounded-[2rem] bg-gray-100">

              <div className="flex h-56 w-56 items-center justify-center cursor-pointer rounded-full border-[12px] border-black bg-black shadow-2xl transition duration-300 hover:-translate-y-2">

                <div className="text-center">
                  <Heart
                    size={65}
                    className="mx-auto text-yellow-400"
                  />

                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white">
                    Brand Logo
                  </p>
                </div>

              </div>

            </div>


            {/* Text */}
            <div>

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
                Our Identity
              </span>

              <h2 className="mt-4 text-3xl font-extrabold uppercase sm:text-4xl">
                Logo Representation
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Our logo represents the importance of protecting and
                nurturing children and the future of the African community.
                It serves as a visual reminder of our responsibility to
                protect vulnerable children and help them thrive.
              </p>

              <div className="mt-8 flex gap-4 rounded-2xl bg-yellow-50 p-6">

                <div className="shrink-0">
                  <Heart className="text-yellow-600" />
                </div>

                <p className="text-sm leading-7 text-gray-600">
                  Every child deserves care, protection, opportunity and
                  hope for a better future.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COLOR SCHEME
      ===================================================== */}
      <section className="bg-gray-50 px-6 py-20 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
              Our Identity
            </span>

            <h2 className="mt-4 text-3xl font-extrabold uppercase sm:text-4xl">
              Our Color Scheme
            </h2>

          </div>


          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">

            {/* Yellow */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <div className="h-32 bg-yellow-400" />

              <div className="p-6">
                <h3 className="font-bold">Yellow</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Representing the innocence and vulnerability of children.
                </p>
              </div>

            </div>


            {/* White */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <div className="h-32 border-b bg-white" />

              <div className="p-6">
                <h3 className="font-bold">White</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Embodying purity, peace and hope.
                </p>
              </div>

            </div>


            {/* Black */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <div className="h-32 bg-black" />

              <div className="p-6">
                <h3 className="font-bold">Black</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Acknowledging the challenges faced by the African
                  community.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OBJECTIVES
      ===================================================== */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">

            {/* Heading */}
            <div>

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
                Our Goals
              </span>

              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
                Our
                <span className="block text-yellow-500">
                  Objectives
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Through our work, we seek to create practical and lasting
                solutions that improve the lives of children and strengthen
                communities.
              </p>

            </div>


            {/* Objectives */}
            <div className="grid gap-4 sm:grid-cols-2">

              {[
                {
                  icon: GraduationCap,
                  text: "Provide educational support and resources.",
                },
                {
                  icon: Stethoscope,
                  text: "Offer healthcare services and wellness programmes.",
                },
                {
                  icon: Home,
                  text: "Create safe spaces for emotional expression and development.",
                },
                {
                  icon: Megaphone,
                  text: "Advocate for children's rights and policy changes.",
                },
                {
                  icon: Users,
                  text: "Foster community engagement and volunteerism.",
                },
              ].map((objective, index) => {

                const Icon = objective.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                      <Icon size={21} />
                    </div>

                    <div className="flex items-start gap-2">

                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-yellow-500"
                      />

                      <p className="text-sm font-medium leading-6 text-gray-700">
                        {objective.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 pb-20 lg:px-10 lg:pb-28">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-yellow-400 px-7 py-14 text-center sm:px-12">

            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-yellow-300/50" />

            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-yellow-500/30" />

            <div className="relative mx-auto max-w-3xl">

              <HandHeart
                size={42}
                className="mx-auto text-black"
              />

              <h2 className="mt-6 text-3xl font-extrabold uppercase sm:text-4xl">
                Be Part of the Journey
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-800">
                Our journey continues, and there is still so much to do.
                Whether through volunteering, partnership, advocacy or
                simply sharing our story, you can help us reach more
                children and communities.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-xl"
              >
                Get Involved
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
    <Footer/>
    </div>
  );
}