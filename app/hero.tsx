import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/volunteer.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-3xl">

          {/* Small Heading */}

          <span className="mb-4 inline-block rounded-full border border-yellow-400 bg-yellow-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Welcome to BRAND NAME
          </span>

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
              href="/about"
              className="rounded-full border-2 border-white px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Learn More
            </Link>

            <Link
              href="/donate"
              className="rounded-full bg-yellow-400 px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:bg-yellow-500"
            >
              Donate Now
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}