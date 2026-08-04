"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Building2,
  Users,
  Globe2,
  FolderKanban,
  PenSquare,
  BookOpen,
  Megaphone,
  Newspaper,
} from "lucide-react";

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    children: [
      {
        title: "Overview",
        description: "Mission, vision and history.",
        href: "/about-us/overview",
        icon: Building2,
      },
      {
        title: "The Governing Board",
        description: "Board of Trustees and Advisory Board.",
        href: "/about/governing-board",
        icon: Users,
      },
      {
        title: "Our Programmes",
        description: "Education, Health and Sustainability.",
        href: "/about/programmes",
        icon: Globe2,
      },
    ],
  },
  {
    title: "Projects & Impact",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Publications",
    children: [
      {
        title: "The Writer's Corner",
        description: "Articles and stories.",
        href: "/publications/writers-corner",
        icon: PenSquare,
      },
      {
        title: "Books & Newsletter",
        description: "Download our publications.",
        href: "/publications/books-newsletter",
        icon: BookOpen,
      },
      {
        title: "Announcements",
        description: "Latest updates.",
        href: "/publications/announcements",
        icon: Megaphone,
      },
      {
        title: "Advertisements",
        description: "Career & partnership opportunities.",
        href: "/publications/advertisements",
        icon: Newspaper,
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header className="fixed top-0 left-0 z-50 w-full bg-black shadow-lg py-4"
      className={`fixed bg-blacktop-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className={`text-2xl font-bold ${
            scrolled ? "text-yellow-500" : "text-white"
          }`}
        >
          BrandLOGO
        </Link>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-8">

          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.title}
                className="group relative"
              >
                <button
                  className={`flex items-center gap-1 font-medium transition ${
                    scrolled
                      ? "text-yellow-400"
                      : "text-white"
                  } hover:text-yellow-500`}
                >
                  {item.title}
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}

                <div className="absolute left-1/2 top-full hidden w-96 -translate-x-1/2 rounded-2xl bg-white p-3 shadow-2xl group-hover:block">

                  {item.children.map((sub) => {
                    const Icon = sub.icon;

                    return (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className="flex gap-4 rounded-xl p-4 transition text-black hover:bg-yellow-50"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                          <Icon
                            className="text-yellow-600"
                            size={22}
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold">
                            {sub.title}
                          </h4>

                          <p className="mt-1 text-sm text-gray-500">
                            {sub.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.href!}
                className={`font-medium transition ${
                  scrolled
                    ? "text-yellow-400"
                    : "text-white"
                } hover:text-yellow-500`}
              >
                {item.title}
              </Link>
            )
          )}

          <button className="rounded-full border border-gray-300 px-5 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Volunteer
          </button>

          <button className="rounded-full bg-yellow-400 px-6 py-2 font-semibold hover:bg-yellow-500">
            Donate
          </button>
        </nav>

        {/* Mobile Button */}

        <button
          className={`lg:hidden ${
            scrolled
              ? "text-white"
              : "text-white"
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile */}

      <div
        className={`overflow-hidden bg-white text-black transition-all duration-500 lg:hidden ${
          mobileMenu
            ? "max-h-screen"
            : "max-h-0"
        }`}
      >
        <div className="space-y-2 px-6 py-6">

          {navigation.map((item) =>
            item.children ? (
              <div key={item.title}>

                <button
                  onClick={() =>
                    setOpenMenu(
                      openMenu === item.title
                        ? ""
                        : item.title
                    )
                  }
                  className="flex w-full items-center justify-between py-3 font-medium"
                >
                  {item.title}

                  {openMenu === item.title ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {openMenu === item.title && (
                  <div className="ml-5 space-y-3 border-l pl-4">

                    {item.children.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className="block py-1 text-gray-600 hover:text-yellow-600"
                      >
                        {sub.title}
                      </Link>
                    ))}

                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.href!}
                className="block py-3 font-medium"
              >
                {item.title}
              </Link>
            )
          )}

          <div className="space-y-3 pt-6">

            <button className="w-full rounded-full border py-3">
              Volunteer
            </button>

            <button className="w-full rounded-full bg-yellow-400 py-3 font-semibold">
              Donate
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}