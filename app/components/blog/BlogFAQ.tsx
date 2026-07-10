type Props = {
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export default function BlogFAQ({ faqs = [] }: Props) {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-black text-white">
        Frequently Asked Questions
      </h2>

      <div className="h-2 bg-black" />

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold text-white">
              {faq.question}
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

<div className="h-3 bg-black" />

    </section>
  );
}