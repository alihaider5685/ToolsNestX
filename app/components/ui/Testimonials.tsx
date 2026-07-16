export default function Testimonials() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto w-full px-8 6xl:px-16">
        <h2 className="text-center text-4xl font-bold text-white">
          Trusted, Fast & Completely Free
        </h2>

        <p className="mt-4 mx-auto max-w-8xl text-center text-lg text-gray-400">
          ToolsNestX helps users worldwide compress images, edit PDFs,
          process text and use developer tools without installation or
          registration.
        </p>

          <div className="h-3 bg-black" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
            <div className="mb-3 text-3xl">⚡</div>
            <h3 className="text-xl font-semibold text-white">
              Lightning Fast
            </h3>
            <p className="mt-2 text-gray-400">
              Access powerful tools with instant processing and smooth
              performance directly in your browser.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
            <div className="mb-3 text-3xl">🔒</div>
            <h3 className="text-xl font-semibold text-white">
              Secure & Private
            </h3>
            <p className="mt-2 text-gray-400">
              Your files and data remain protected. Most tools work
              directly in your browser without permanent storage.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
            <div className="mb-3 text-3xl">🌍</div>
            <h3 className="text-xl font-semibold text-white">
              Works Everywhere
            </h3>
            <p className="mt-2 text-gray-400">
              Use ToolsNestX on desktop, tablet and mobile devices
              without downloading or installing software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

