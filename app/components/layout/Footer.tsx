import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-screen-2xl px-8 py-16">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              File<span className="text-blue-500">NestX</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Powerful online tools for PDFs, Images, Text Utilities and
              Developer tools — fast, secure and completely free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-400 hover:text-blue-500 transition">
                Home
              </Link>

              <Link href="/about" className="text-gray-400 hover:text-blue-500 transition">
                About
              </Link>

              <Link href="/faq" className="text-gray-400 hover:text-blue-500 transition">
                FAQ
              </Link>

              <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Legal
            </h3>

            <div className="flex flex-col gap-4">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Categories
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <span>PDF Tools</span>
              <span>Image Tools</span>
              <span>Text Tools</span>
              <span>Developer Tools</span>
            </div>
          </div>

          {/* Created By */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Created By
            </h3>

            <div className="flex items-center gap-4">

              <img
                src="/developer.png"
                 alt="Ali Haider"
                 className="w-[90px] h-[90px] rounded-full object-cover border-2 border-blue-500"
                  />

              <div>
                <h4 className="text-2xl font-bold text-white">
                  Ali Haider
                </h4>

                <p className="text-blue-400">
                  Founder & Full Stack Developer
                </p>
              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Hi, I'm{" "}
              <span className="font-semibold text-white">
                Ali Haider
              </span>
              , creator of{" "}
              <span className="font-semibold text-white">
                ToolsNestX
              </span>
              . I designed and developed this platform
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
          © 2026{" "}
          <span className="font-semibold text-white">
            ToolsNestX
          </span>
          . All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}