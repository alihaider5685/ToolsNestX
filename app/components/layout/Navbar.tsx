"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/app/components/common/Button";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { tools } from "@/lib/tools";

const TOOL_CATEGORIES = [
  "PDF Tools",
  "Image Tools",
  "Text Tools",
  "Developer Tools",
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Tools", href: "/tools" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false);

  const groupedTools = TOOL_CATEGORIES.map((category) => {
    const categoryTools = tools
      .filter((tool) => tool.category === category)
      .sort((a, b) => Number(b.featured) - Number(a.featured))
      .slice(0, 3);

    return { category, categoryTools };
  });

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change (adjusting state during render,
  // per React's recommended pattern, instead of calling setState in an effect)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

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
        className={`sticky top-0 z-50 w-full border-b backdrop-blur-2xl transition-colors duration-300 ${
          scrolled
            ? "border-white/10 bg-black/85 shadow-lg"
            : "border-white/5 bg-black/60"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">

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
                link.name === "Tools"
                  ? pathname === "/tools"
                  : pathname === link.href;

              if (link.name === "Tools") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setToolsMenuOpen(true)}
                    onMouseLeave={() => setToolsMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`group relative flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-blue-500" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          toolsMenuOpen ? "rotate-180" : ""
                        }`}
                      />

                      <span
                        className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-500 transition-colors duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>

                    {/* ================= MEGA MENU ================= */}
                    <div
                      className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                        toolsMenuOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl shadow-black/60">
                        {groupedTools.map(({ category, categoryTools }) => (
                          <div key={category} className="p-2">
                            <Link
                              href={`/tools?category=${encodeURIComponent(category)}`}
                              className="text-xs font-semibold uppercase tracking-wide text-blue-400 transition hover:text-blue-300"
                            >
                              {category}
                            </Link>

                            <div className="mt-3 flex flex-col gap-1">
                              {categoryTools.map((tool) => {
                                const Icon = tool.icon;

                                return (
                                  <Link
                                    key={tool.slug}
                                    href={tool.href}
                                    className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                                  >
                                    <span
                                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${tool.color}`}
                                    >
                                      <Icon size={13} className="text-white" />
                                    </span>
                                    {tool.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/tools"
                        className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-blue-500/20 bg-blue-500/5 py-3 text-sm font-semibold text-blue-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                      >
                        View All {tools.length} Tools
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-blue-500" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-500 transition-colors duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right side: CTA (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <Button href="/tools" className="hidden h-6 px-5 text-sm md:inline-flex">
              Explore All Tools
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
        className={`fixed inset-0 z-[60] transition-colors duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-lg"
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
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                      : "border-white/5 bg-white/[0.02] text-gray-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                  <ArrowRight
                    size={16}
                    className="text-gray-600 transition-colors duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                  />
                </Link>
              );
            })}
          </div>

          <Button href="/tools" onClick={() => setIsOpen(false)} className="w-full justify-center">
            Explore Tools
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </>
  );
}