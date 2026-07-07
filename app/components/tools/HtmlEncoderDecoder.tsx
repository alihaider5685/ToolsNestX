"use client";

import { useState } from "react";

export default function HtmlEncoderDecoder() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const encodeHtml = () => {
    const encoded = input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

    setResult(encoded);
  };

  const decodeHtml = () => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = input;
    setResult(textarea.value);
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
    return (
    <div className="mx-auto max-w-screen-2xl max-w-5xl py-10">
      <div className="mb-8 text-center">
        
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter HTML or encoded HTML..."
          className="min-h-[220px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={encodeHtml}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Encode HTML
          </button>

          <button
            onClick={decodeHtml}
            className="rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
          >
            Decode HTML
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

      <div className="h-3 bg-black" />

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
          placeholder="Result will appear here..."
          className="min-h-[220px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}