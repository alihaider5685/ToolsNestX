import Link from "next/link";
import {
  Mail,
  ArrowRight,
  FileText,
  ImageIcon,
  Type,
  Code2,
} from "lucide-react";
import Button from "@/app/components/common/Button";


const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Disclaimer", href: "/disclaimer" },
];

const categories = [
  { name: "PDF Tools", icon: FileText, href: "/#tools" },
  { name: "Image Tools", icon: ImageIcon, href: "/#tools" },
  { name: "Text Tools", icon: Type, href: "/#tools" },
  { name: "Developer Tools", icon: Code2, href: "/#tools" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      {/* Ambient glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:py-24">

        <div className="h-5 bg-black" />


        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Tools<span className="text-blue-500">NestX</span>
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">
              Powerful online tools for PDFs, Images, Text Utilities and
              Developer tools — fast, secure and completely free.
            </p>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-1.5 text-gray-400 transition hover:text-blue-500"
                >
                  {link.name}
                  <ArrowRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>

            <div className="flex flex-col gap-3.5">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-1.5 text-gray-400 transition hover:text-blue-500"
                >
                  {link.name}
                  <ArrowRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Categories
            </h3>

            <div className="flex flex-col gap-3.5">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="group flex items-center gap-2.5 text-gray-400 transition hover:text-blue-500"
                  >
                    <Icon size={15} className="text-gray-600 transition group-hover:text-blue-500" />
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Created By */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Created By
            </h3>

            <div className="flex items-center gap-4">
              <img
                src="/developer.png"
                alt="Ali Haider"
                className="h-[90px] w-[90px] rounded-full border-2 border-blue-500 object-cover"
              />

              <div>
                <h4 className="text-xl font-bold text-white sm:text-2xl">
                  Ali Haider
                </h4>
                <p className="text-blue-400">Founder &amp; Full Stack Developer</p>
              </div>
            </div>

            <div className="h-2 bg-black" />

            <p className="mt-6 leading-8 text-gray-400">
              Hi, I'm{" "}
              <span className="font-semibold text-white">Ali Haider</span>,
              creator of{" "}
              <span className="font-semibold text-white">ToolsNestX</span>. I
              designed and developed this platform end-to-end.
            </p>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row">
          <p>
            © 2026{" "}
            <span className="font-semibold text-white">ToolsNestX</span>. All
            Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <span className="text-blue-500">♥</span>
            by
            <span className="font-semibold text-white">Ali Haider</span>    .
          </p>
        </div>

      </div>
    </footer>
  );
}