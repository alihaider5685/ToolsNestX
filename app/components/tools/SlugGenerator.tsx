"use client";

import { useState } from "react";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const generateSlug = () => {
    const slug = input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setResult(slug);
  };

  const copyResult = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
    } catch (error) {
      console.error(error);
    }
  };

  const clearAll = () => {
    setInput("");
    setResult("");
  };

  const inputLength = input.length;
  const outputLength = result.length;
    return (
    <div className="mx-auto max-w-screen-2xl max-w-5xl py-10">
      <div className="mb-8 text-center">
       
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <label className="mb-3 block text-sm font-medium text-gray-300">
          Input Text
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter title or text..."
          className="min-h-[220px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={generateSlug}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Generate Slug
          </button>

          <button
            onClick={copyResult}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Copy Result
          </button>

          <button
            onClick={clearAll}
            className="rounded-xl border border-red-800 px-5 py-3 font-medium text-red-400 transition hover:bg-red-950"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="h-4 bg-black" />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Input Characters</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {inputLength}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Slug Length</p>
          <p className="mt-2 text-2xl font-bold text-green-400">
            {outputLength}
          </p>
        </div>
      </div>

      <div className="h-4 bg-black" />

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Generated Slug
          </h2>

          <span className="text-sm text-gray-400">
            {result.length} Characters
          </span>
        </div>

        <textarea
          readOnly
          value={result}
          placeholder="Generated slug will appear here..."
          className="min-h-[180px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}