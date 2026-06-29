"use client";

import { useState } from "react";

export default function UrlEncoderDecoder() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    try {
      setError("");
      setResult(encodeURIComponent(input));
    } catch {
      setError("Failed to encode URL.");
    }
  };

  const handleDecode = () => {
    try {
      setError("");
      setResult(decodeURIComponent(input));
    } catch {
      setError("Invalid encoded URL.");
    }
  };

  const handleCopy = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSwap = () => {
    setInput(result);
    setResult(input);
    setError("");
  };

  const handleClear = () => {
    setInput("");
    setResult("");
    setError("");
  };
    return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          URL Encoder / Decoder
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Encode and decode URLs instantly for web development, APIs, query
          strings, and data transmission.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <label className="mb-3 block text-sm font-medium text-gray-300">
          Input
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter URL or encoded URL..."
          className="min-h-[180px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={handleEncode}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Encode
          </button>

          <button
            onClick={handleDecode}
            className="rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
          >
            Decode
          </button>

          <button
            onClick={handleSwap}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Swap
          </button>

          <button
            onClick={handleCopy}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Copy Result
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-red-800 px-5 py-3 font-medium text-red-400 transition hover:bg-red-950"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-xl border border-red-900 bg-red-950/40 p-3 text-sm text-red-400">
            {error}
          </div>
        )}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Result</h2>

          <span className="text-sm text-gray-400">
            {result.length} Characters
          </span>
        </div>

        <textarea
          readOnly
          value={result}
          placeholder="Encoded or decoded URL will appear here..."
          className="min-h-[180px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}