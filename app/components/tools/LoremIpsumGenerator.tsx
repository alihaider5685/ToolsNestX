"use client";

import { useState } from "react";

const DEFAULT_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function LoremIpsumGenerator() {
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">(
    "paragraphs"
  );
  const [count, setCount] = useState(3);
  const [result, setResult] = useState("");

  const generateLorem = () => {
    const safeCount = Math.max(1, Math.min(count, 100));

    if (type === "paragraphs") {
      const paragraphs = Array.from(
        { length: safeCount },
        () => DEFAULT_TEXT
      );

      setResult(paragraphs.join("\n\n"));
      return;
    }

    if (type === "sentences") {
      const sentence =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

      const sentences = Array.from(
        { length: safeCount },
        () => sentence
      );

      setResult(sentences.join(" "));
      return;
    }

    const words = DEFAULT_TEXT.split(" ");

    const generatedWords = Array.from(
      { length: safeCount },
      (_, index) => words[index % words.length]
    );

    setResult(generatedWords.join(" "));
  };

  const copyText = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const clearAll = () => {
    setResult("");
    setCount(3);
    setType("paragraphs");
  };
    return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          Lorem Ipsum Generator
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Generate professional Lorem Ipsum text for website mockups, designs,
          content layouts and development projects.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Generate By
            </label>

            <select
              value={type}
              onChange={(e) =>
                setType(
                  e.target.value as "paragraphs" | "sentences" | "words"
                )
              }
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none"
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Count
            </label>

            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={generateLorem}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Generate Text
          </button>

          <button
            onClick={copyText}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Copy
          </button>

          <button
            onClick={clearAll}
            className="rounded-xl border border-red-800 px-5 py-3 font-medium text-red-400 transition hover:bg-red-950"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Generated Result
          </h2>

          <span className="text-sm text-gray-400">
            {result.length} Characters
          </span>
        </div>

        <textarea
          readOnly
          value={result}
          placeholder="Generated Lorem Ipsum text will appear here..."
          className="min-h-[300px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}