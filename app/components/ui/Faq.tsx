
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is FileNestX?",
      answer:
        "FileNestX is a free online platform offering PDF, Image, Text and Developer tools directly in your browser without requiring installation.",
    },
    {
      question: "Is FileNestX free to use?",
      answer:
        "Yes. Every tool on FileNestX is completely free. There are no subscriptions, hidden fees or account requirements.",
    },
    {
      question: "Are my files secure?",
      answer:
        "Absolutely. Your privacy is our priority. Most tools process files locally in your browser, and uploaded files are automatically removed after processing.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No. FileNestX works instantly without registration. Simply open a tool and start using it.",
    },
    {
      question: "Can I use FileNestX on mobile devices?",
      answer:
        "Yes. FileNestX is fully responsive and works smoothly on desktop, tablet and mobile devices.",
    },
    {
      question: "Which tools are available?",
      answer:
        "We provide PDF Tools, Image Tools, Text Utilities and Developer Tools with many more powerful utilities coming soon.",
    },
  ];

  return (
    <section className="bg-black py-28 px-6">
      <div className="mx-auto w-full px-8 5xl:px-16">

        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="px-8 pb-7 text-center text-[17px] leading-8 text-gray-400">
            Find answers to the most common questions about FileNestX and how
            our online tools work.
          </p>
        </div>

        {/* Accordion */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#181818] to-[#101010] transition-all duration-300 hover:border-blue-500"
              >
                <button
  onClick={() => setOpen(active ? null : index)}
  className="flex w-full items-center justify-center gap-4 px-8 py-6 text-center relative"
>
  <h3 className="text-xl font-semibold text-white">
    {faq.question}
  </h3>

  <ChevronDown
    size={24}
    className={`absolute right-8 text-blue-500 transition-transform duration-300 ${
      active ? "rotate-180" : ""
    }`}
  />
</button>

                <div
                  className={`grid transition-all duration-300 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-7 text-[17px] leading-8 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}