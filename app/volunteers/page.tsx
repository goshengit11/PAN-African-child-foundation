"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import {
  Heart,
  Users,
  HandHeart,
  Globe2,
  Sprout,
  MessageCircle,
  ShieldCheck,
  Lightbulb,
  Network,
  Smile,
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

import Link from "next/link";

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="bg-black">

        <Navbar />

        <section className="px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-28">

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Hero Text */}

              <div className="max-w-2xl">

                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-yellow-400"></span>

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                    Get Involved
                  </p>
                </div>

                <h1 className="mt-6 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                  Become a
                  <span className="block text-yellow-400">
                    Volunteer
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                  Volunteering is an opportunity to give your time, skills
                  and service to make a meaningful difference in the lives
                  of children, communities and people who need support.
                </p>

                <a
                  href="#why-volunteer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  Discover Volunteering

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-yellow-400 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={17} />
                  </span>
                </a>

              </div>


              {/* Hero Visual */}

              <div className="relative">

                <div className="relative overflow-hidden rounded-[2rem] bg-yellow-400 p-2">

                  <img
                    src="/volunteer.jpg"
                    alt="Volunteers supporting the community"
                    className="h-[350px] w-full rounded-[1.6rem] object-cover sm:h-[450px]"
                  />

                  <div className="absolute inset-2 rounded-[1.6rem] bg-black/20"></div>

                </div>


                {/* Floating Card */}

                <div className="absolute -bottom-6 -left-2 rounded-2xl bg-white p-5 shadow-xl sm:-left-6">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black">
                      <HandHeart size={24} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-black">
                        Give. Serve. Impact.
                      </p>

                      <p className="text-xs text-gray-500">
                        Every helping hand matters.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>


      {/* =====================================================
          WHAT IS VOLUNTEERING?
      ===================================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-20 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Text */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600">
                Understanding Volunteering
              </p>

              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight text-black sm:text-4xl lg:text-5xl">
                What is
                <span className="block text-yellow-500">
                  Volunteering?
                </span>
              </h2>

              <div className="mt-6 h-1 w-16 bg-yellow-400"></div>

              <p className="mt-7 text-base leading-8 text-gray-600">
                Volunteering involves offering one's time, skills, and
                services without payment to benefit individuals,
                communities, or organizations.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Volunteering allows individuals to make a positive impact,
                gain valuable experience, develop skills, and find a sense
                of purpose. It promotes civic responsibility and social
                change.
              </p>

            </div>


            {/* Highlight Card */}

            <div className="relative overflow-hidden rounded-[2rem] bg-black p-8 sm:p-10">

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-400/20"></div>

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  <Heart size={28} />
                </div>

                <h3 className="mt-7 text-2xl font-bold uppercase text-white">
                  Make a Difference
                </h3>

                <p className="mt-4 leading-8 text-gray-300">
                  When you volunteer, you don't just give your time.
                  You become part of something bigger — helping people,
                  strengthening communities and inspiring positive change.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-yellow-400">
                  <CheckCircle2 size={20} />
                  Your contribution matters
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMPORTANCE OF VOLUNTEERING
      ===================================================== */}

      <section
        id="why-volunteer"
        className="bg-gray-100 px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600">
              Why It Matters
            </p>

            <h2 className="mt-4 text-3xl font-extrabold uppercase text-black sm:text-4xl">
              Importance of
              <span className="text-yellow-500">
                {" "}Volunteering
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Volunteering can be a powerful way to develop empathy and
              compassion. It exposes us to different perspectives and
              experiences, broadening our understanding and appreciation
              of the world.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}

            <div className="group rounded-[1.5rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                <Globe2 size={27} />
              </div>

              <h3 className="mt-7 text-lg font-bold uppercase text-black group-hover:text-yellow-400">
                Community Impact
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 group-hover:text-gray-300">
                Volunteering makes a difference in communities by
                addressing social, environmental, or humanitarian needs.
              </p>

            </div>


            {/* Card 2 */}

            <div className="group rounded-[1.5rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                <Sprout size={27} />
              </div>

              <h3 className="mt-7 text-lg font-bold uppercase text-black group-hover:text-yellow-400">
                Personal Growth
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 group-hover:text-gray-300">
                Volunteering leads to personal growth through skill
                development, meaningful experiences, and expanded
                perspectives.
              </p>

            </div>


            {/* Card 3 */}

            <div className="group rounded-[1.5rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                <Users size={27} />
              </div>

              <h3 className="mt-7 text-lg font-bold uppercase text-black group-hover:text-yellow-400">
                Social Connections
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 group-hover:text-gray-300">
                Volunteering builds social connections through interactions
                with diverse individuals and collaboration with like-minded
                people.
              </p>

            </div>


            {/* Card 4 */}

            <div className="group rounded-[1.5rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                <ShieldCheck size={27} />
              </div>

              <h3 className="mt-7 text-lg font-bold uppercase text-black group-hover:text-yellow-400">
                Civic Engagement
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 group-hover:text-gray-300">
                Volunteering promotes civic responsibility and active
                participation in addressing societal issues for positive
                social change.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY SHOULD YOU VOLUNTEER?
      ===================================================== */}

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-20 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Get Involved
            </p>

            <h2 className="mt-4 text-3xl font-extrabold uppercase text-white sm:text-4xl lg:text-5xl">
              Why Should You
              <span className="block text-yellow-400">
                Volunteer?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
              Volunteering is a valuable way to pass on skills and
              knowledge to the next generation while making a positive
              difference.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {/* 01 */}

            <div className="group flex gap-5 rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-yellow-400 hover:bg-gray-900">

              <div className="text-3xl font-black text-yellow-400">
                01
              </div>

              <div>

                <h3 className="text-xl font-bold uppercase text-white">
                  To Make a Difference
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Volunteering lets you contribute to causes you care
                  about, making a positive impact and finding fulfillment.
                </p>

              </div>

            </div>


            {/* 02 */}

            <div className="group flex gap-5 rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-yellow-400 hover:bg-gray-900">

              <div className="text-3xl font-black text-yellow-400">
                02
              </div>

              <div>

                <h3 className="text-xl font-bold uppercase text-white">
                  Expand Your Network
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Volunteering connects you with diverse people,
                  expanding your social and professional connections.
                </p>

              </div>

            </div>


            {/* 03 */}

            <div className="group flex gap-5 rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-yellow-400 hover:bg-gray-900">

              <div className="text-3xl font-black text-yellow-400">
                03
              </div>

              <div>

                <h3 className="text-xl font-bold uppercase text-white">
                  Improve Well-Being
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Volunteering can support well-being by creating
                  meaningful experiences and a sense of purpose.
                </p>

              </div>

            </div>


            {/* 04 */}

            <div className="group flex gap-5 rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-yellow-400 hover:bg-gray-900">

              <div className="text-3xl font-black text-yellow-400">
                04
              </div>

              <div>

                <h3 className="text-xl font-bold uppercase text-white">
                  Gain New Perspectives
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Volunteering exposes you to different cultures and
                  experiences, broadening your understanding and
                  appreciation of diversity.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          REWARDS OF VOLUNTEERING
      ===================================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-20 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Heading */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600">
                The Benefits
              </p>

              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight text-black sm:text-4xl lg:text-5xl">
                Rewards of
                <span className="block text-yellow-500">
                  Volunteering
                </span>
              </h2>

              <div className="mt-6 h-1 w-16 bg-yellow-400"></div>

              <p className="mt-6 leading-8 text-gray-600">
                Volunteering offers several rewards and benefits that
                extend beyond the immediate impact made in a community.
              </p>

            </div>


            {/* Rewards */}

            <div className="space-y-4">

              {/* 1 */}

              <div className="group flex gap-5 rounded-2xl bg-gray-100 p-5 transition-all duration-300 hover:bg-yellow-400">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black font-bold text-yellow-400">
                  01
                </div>

                <div>

                  <h3 className="font-bold uppercase text-black">
                    Personal Satisfaction
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Volunteering brings personal satisfaction and
                    fulfillment through making a positive impact and
                    contributing to meaningful causes.
                  </p>

                </div>

              </div>


              {/* 2 */}

              <div className="group flex gap-5 rounded-2xl bg-gray-100 p-5 transition-all duration-300 hover:bg-yellow-400">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black font-bold text-yellow-400">
                  02
                </div>

                <div>

                  <h3 className="font-bold uppercase text-black">
                    Skill Development
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Volunteers develop and enhance skills in leadership,
                    communication, teamwork, problem-solving, and more.
                  </p>

                </div>

              </div>


              {/* 3 */}

              <div className="group flex gap-5 rounded-2xl bg-gray-100 p-5 transition-all duration-300 hover:bg-yellow-400">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black font-bold text-yellow-400">
                  03
                </div>

                <div>

                  <h3 className="font-bold uppercase text-black">
                    Networking Opportunities
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Volunteering provides opportunities to connect with
                    like-minded individuals and professionals.
                  </p>

                </div>

              </div>


              {/* 4 */}

              <div className="group flex gap-5 rounded-2xl bg-gray-100 p-5 transition-all duration-300 hover:bg-yellow-400">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black font-bold text-yellow-400">
                  04
                </div>

                <div>

                  <h3 className="font-bold uppercase text-black">
                    Well-Being
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Engaging in volunteer activities can contribute to
                    well-being and create meaningful experiences.
                  </p>

                </div>

              </div>


              {/* 5 */}

              <div className="group flex gap-5 rounded-2xl bg-gray-100 p-5 transition-all duration-300 hover:bg-yellow-400">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black font-bold text-yellow-400">
                  05
                </div>

                <div>

                  <h3 className="font-bold uppercase text-black">
                    Stronger Communities
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Volunteering strengthens communities, fosters social
                    cohesion, and creates a sense of belonging.
                  </p>

                </div>

              </div>


              {/* 6 */}

              <div className="group flex gap-5 rounded-2xl bg-gray-100 p-5 transition-all duration-300 hover:bg-yellow-400">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black font-bold text-yellow-400">
                  06
                </div>

                <div>

                  <h3 className="font-bold uppercase text-black">
                    Career Prospects
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Volunteering can enhance career prospects by
                    showcasing dedication, skills and social responsibility.
                  </p>

                </div>

              </div>


              {/* 7 */}

              <div className="group flex gap-5 rounded-2xl bg-gray-100 p-5 transition-all duration-300 hover:bg-yellow-400">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black font-bold text-yellow-400">
                  07
                </div>

                <div>

                  <h3 className="font-bold uppercase text-black">
                    Making a Difference
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Making a positive difference in the lives of others
                    is one of the most rewarding aspects of volunteering.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-yellow-400 px-6 py-20 sm:px-10 lg:px-20 lg:py-24">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-400">
            <HandHeart size={32} />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold uppercase text-black sm:text-4xl lg:text-5xl">
            Your Time Can Make
            <span className="block">
              A Difference
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-800">
            Whether you have skills to share, time to give, or simply
            a heart willing to serve, there is a place for you.
            Join us in creating a brighter future for children and
            communities.
          </p>

          <Link
            href={"/volunteerform"}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-xl"
          >
            Become a Volunteer

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <Footer />

    </div>
  );
}