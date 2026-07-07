"use client";

import { useState } from "react";

export default function ReverseText() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const reverseText = () => {
    setResult(input.split("").reverse().join(""));
  };

  const reverseWords = () => {
    setResult(
      input
        .split(" ")
        .reverse()
        .join(" ")
    );
  };

  const reverseLines = () => {
    setResult(
      input
        .split("\n")
        .reverse()
        .join("\n")
    );
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

  const inputCharacters = input.length;
  const outputCharacters = result.length;
    return (
    <div className="mx-auto max-w-screen-2xl w-full max-w-7xl py-10">
      <div className="mb-8 text-center">
        
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
  

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text here..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

        <div className="h-5 bg-gray-1000" />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={reverseText}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Reverse Text
          </button>

          <button
            onClick={reverseWords}
            className="rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
          >
            Reverse Words
          </button>

          <button
            onClick={reverseLines}
            className="rounded-xl bg-purple-600 px-5 py-3 font-medium text-white transition hover:bg-purple-700"
          >
            Reverse Lines
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

     <div className="h-10 bg-gray-9000" />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Input Characters</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {inputCharacters}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Output Characters</p>
          <p className="mt-2 text-2xl font-bold text-green-400">
            {outputCharacters}
          </p>
        </div>
      </div>

     <div className="h-10 bg-black" />

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
          placeholder="Reversed text will appear here..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}