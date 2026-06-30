
export default function FAQ() {
  const faqs = [
    {
      question: "What is FileNestX?",
      answer:
        "FileNestX is a free online platform that provides PDF, Image, Text and Developer tools directly in your browser.",
    },
    {
      question: "Is FileNestX free to use?",
      answer:
        "Yes. All tools on FileNestX are free to use without subscriptions or hidden charges.",
    },
    {
      question: "Are my files and data secure?",
      answer:
        "Yes. We prioritize user privacy and process files securely. Most tools work directly in your browser.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No. You can access and use FileNestX tools without creating an account.",
    },
    {
      question: "Can I use FileNestX on mobile devices?",
      answer:
        "Yes. FileNestX is fully responsive and works on desktop, tablet and mobile devices.",
    },
    {
      question: "What types of tools are available?",
      answer:
        "FileNestX offers Image Tools, PDF Tools, Text Tools and Developer Tools to help improve productivity.",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 mb-12 text-center text-gray-400">
          Everything you need to know about FileNestX.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-800 bg-[#111] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

