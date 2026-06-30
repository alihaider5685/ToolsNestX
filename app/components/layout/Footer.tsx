import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              File<span className="text-blue-500">NestX</span>
            </h2>

            <p className="mt-4 text-sm text-gray-400">
              Free online tools for PDF, Images, Text and Developers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Legal
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Categories
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <span>Image Tools</span>
              <span>PDF Tools</span>
              <span>Text Tools</span>
              <span>Developer Tools</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 FileNestX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}