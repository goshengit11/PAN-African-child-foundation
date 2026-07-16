import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  GraduationCap,
  Globe,
} from "lucide-react";

export default function OurMission() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Image */}

        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/volunteer.jpg"
            alt="Our Mission"
            width={700}
            height={800}
            className="h-150 w-full object-cover"
          />

          {/* Floating Card */}

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-500">
              Established since
            </h3>

            <p className="mt-2 text-3xl text-yellow-600">
              xxxxxx
            </p>
          </div>
        </div>

        {/* Right Content */}

        <div>

          {/* Badge */}

          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-yellow-600">
            Our Mission
          </span>

          {/* Heading */}

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Empowering People,
            <br />
            Building Stronger Communities
          </h2>

          {/* Paragraph */}

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe that sustainable development begins with
            empowered people. Through education, advocacy,
            leadership, and strategic partnerships, we work to
            improve lives and create opportunities for vulnerable
            communities.
          </p>

          {/* Features */}

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-5 rounded-2xl border p-5 transition hover:border-yellow-400 hover:shadow-lg">

              <div className="rounded-xl bg-yellow-100 p-3">
                <HeartHandshake className="text-yellow-600" size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black">
                  Community Development
                </h3>

                <p className="mt-2 text-gray-600">
                  Supporting communities through sustainable
                  projects that improve livelihoods.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 rounded-2xl border p-5 transition hover:border-yellow-400 hover:shadow-lg">

              <div className="rounded-xl bg-yellow-100 p-3">
                <GraduationCap className="text-yellow-600" size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black">
                  Education & Capacity Building
                </h3>

                <p className="mt-2 text-gray-600">
                  Providing knowledge, skills and mentorship to
                  help individuals achieve their full potential.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 rounded-2xl border p-5 transition hover:border-yellow-400 hover:shadow-lg">

              <div className="rounded-xl bg-yellow-100 p-3">
                <Globe className="text-yellow-600" size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black">
                  Sustainable Partnerships
                </h3>

                <p className="mt-2 text-gray-600">
                  Collaborating with governments, organizations
                  and communities to create lasting impact.
                </p>
              </div>

            </div>

          </div>

          {/* Button */}

          <Link
            href="/about-us/overview"
            className="mt-10 inline-flex rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
}