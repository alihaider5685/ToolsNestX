"use client";

import { useState } from "react";

export default function JsMinifier() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const minifyJs = () => {
    if (!input.trim()) {
      setResult("");
      return;
    }

    const minified = input
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "")
      .replace(/\s+/g, " ")
      .replace(/\s*{\s*/g, "{")
      .replace(/\s*}\s*/g, "}")
      .replace(/\s*;\s*/g, ";")
      .replace(/\s*=\s*/g, "=")
      .replace(/\s*,\s*/g, ",")
      .replace(/\s*\(\s*/g, "(")
      .replace(/\s*\)\s*/g, ")")
      .trim();

    setResult(minified);
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

  const originalSize = input.length;
  const minifiedSize = result.length;
  const savedBytes = originalSize - minifiedSize;
    return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          JS Minifier
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Minify JavaScript code by removing comments, whitespace, and
          unnecessary characters to reduce file size and improve performance.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <label className="mb-3 block text-sm font-medium text-gray-300">
          JavaScript Code
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JavaScript code here..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={minifyJs}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Minify JavaScript
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

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Original Size</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {originalSize}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Minified Size</p>
          <p className="mt-2 text-2xl font-bold text-white">
            {minifiedSize}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
          <p className="text-sm text-gray-400">Saved</p>
          <p className="mt-2 text-2xl font-bold text-green-400">
            {savedBytes > 0 ? savedBytes : 0}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Minified JavaScript
          </h2>

          <span className="text-sm text-gray-400">
            {result.length} Characters
          </span>
        </div>

        <textarea
          readOnly
          value={result}
          placeholder="Minified JavaScript will appear here..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 font-mono text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}