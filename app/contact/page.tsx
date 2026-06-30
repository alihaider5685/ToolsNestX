export const metadata = {
  title: "Contact Us | FileNestX",
  description:
    "Get in touch with FileNestX. We'd love to hear your questions, feedback, and suggestions.",
};

export default function ContactPage() {
  return (
    <main className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Have questions, suggestions, or feedback? We'd love to hear from
            you. Reach out and we'll do our best to respond as soon as possible.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-[#111] p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Get In Touch
            </h2>

            <p className="mb-4 text-gray-400">
              For general inquiries, business opportunities, partnerships, or
              support requests, feel free to contact us.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400">
                  contact@filenestx.com
                </p>
              </div>

              <div>
                <p className="font-medium">Website</p>
                <p className="text-gray-400">
                  FileNestX.com
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111] p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Send a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}