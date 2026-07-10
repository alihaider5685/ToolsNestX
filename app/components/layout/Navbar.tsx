"use client";

import Link from "next/link";
import Button from "@/app/components/common/Button";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-2xl">
       <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="select-none text-3xl font-extrabold tracking-tight transition duration-300 hover:scale-105"
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
  isActive
    ? "text-blue-500"
    : "text-gray-300 hover:text-white"
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

        {/* CTA Button */}
  <Button
  href="/#tools"
  className="h-6 px-5 text-sm"
   >
    Explore Tools
     </Button>
      </div>
    </nav>
  );
}