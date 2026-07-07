"use client";

import { useState } from "react";

export default function RemoveDuplicateLines() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const removeDuplicates = () => {
    if (!input.trim()) {
      setResult("");
      return;
    }

    const lines = input
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const uniqueLines = [...new Set(lines)];

    setResult(uniqueLines.join("\n"));
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

  const inputLines = input
    .split("\n")
    .filter((line) => line.trim() !== "").length;

  const outputLines = result
    .split("\n")
    .filter((line) => line.trim() !== "").length;
      return (
    <div className="mx-auto max-w-screen-2xl w-full max-w-7xl py-10">
      <div className="mb-8 text-center">
        
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <label className="mb-3 block text-sm font-medium text-gray-300">
          Input Text
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste text with duplicate lines..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

         <div className="h-5 bg-gray-1000" />


        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={removeDuplicates}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Remove Duplicates
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

      <div className="h-5 bg-black" />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Input Lines</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {inputLines}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Unique Lines</p>
          <p className="mt-2 text-2xl font-bold text-green-400">
            {outputLines}
          </p>
        </div>
      </div>

      <div className="h-5 bg-black" />

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Result
          </h2>

          <span className="text-sm text-gray-400">
            {result.length} Characters
          </span>
        </div>

        <textarea
          readOnly
          value={result}
          placeholder="Unique lines will appear here..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}