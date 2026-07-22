"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/app/components/common/Button";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Tools", href: "/#tools" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Add background/shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/85 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "border-white/5 bg-black/60"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <Link
            href="/"
            className="select-none text-2xl font-extrabold tracking-tight transition duration-300 hover:scale-105 sm:text-3xl"
          >
            <span className="text-white">Tools</span>
            <span className="text-blue-500">NestX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/#tools" && pathname === "/tools");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-blue-500" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right side: CTA (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <Button href="/#tools" className="hidden h-6 px-5 text-sm md:inline-flex">
              Explore Tools
            </Button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-blue-500/40 hover:text-white md:hidden"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </nav>

      {/* ================= MOBILE MENU OVERLAY ================= */}

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-white/10 bg-[#050505] px-6 pb-8 pt-6 shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="select-none text-2xl font-extrabold tracking-tight"
            >
              <span className="text-white">Tools</span>
              <span className="text-blue-500">NestX</span>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-blue-500/40 hover:text-white"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-10 flex flex-1 flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/#tools" && pathname === "/tools");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                      : "border-white/5 bg-white/[0.02] text-gray-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                  <ArrowRight
                    size={16}
                    className="text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                  />
                </Link>
              );
            })}
          </div>

          <Button href="/#tools" onClick={() => setIsOpen(false)} className="w-full justify-center">
            Explore Tools
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </>
  );
}