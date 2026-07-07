"use client";

import { useState } from "react";

export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const formatSql = () => {
    if (!input.trim()) {
      setResult("");
      return;
    }

    const formatted = input
      .replace(/\s+/g, " ")
      .replace(/\bselect\b/gi, "\nSELECT")
      .replace(/\bfrom\b/gi, "\nFROM")
      .replace(/\bwhere\b/gi, "\nWHERE")
      .replace(/\band\b/gi, "\n  AND")
      .replace(/\bor\b/gi, "\n  OR")
      .replace(/\bgroup by\b/gi, "\nGROUP BY")
      .replace(/\border by\b/gi, "\nORDER BY")
      .replace(/\bhaving\b/gi, "\nHAVING")
      .replace(/\blimit\b/gi, "\nLIMIT")
      .trim();

    setResult(formatted);
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
          SQL Query
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your SQL query here..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 font-mono text-gray-200 outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={formatSql}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Format SQL
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
          <p className="text-sm text-gray-400">Output Characters</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {outputLength}
          </p>
        </div>
      </div>

      <div className="h-4 bg-black" />

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Formatted SQL
          </h2>

          <span className="text-sm text-gray-400">
            {result.length} Characters
          </span>
        </div>

        <textarea
          readOnly
          value={result}
          placeholder="Formatted SQL will appear here..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 font-mono text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}