"use client";

import { useState } from "react";

type HashType = "SHA-1" | "SHA-256" | "SHA-512";

export default function HashGenerator() {
  const [text, setText] = useState("");
  const [hashType, setHashType] = useState<HashType>("SHA-256");
  const [result, setResult] = useState("");

  const generateHash = async () => {
    if (!text.trim()) {
      setResult("");
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest(
      hashType,
      data
    );

    const hashArray = Array.from(
      new Uint8Array(hashBuffer)
    );

    const hashHex = hashArray
      .map((byte) =>
        byte.toString(16).padStart(2, "0")
      )
      .join("");

    setResult(hashHex);
  };

  const copyHash = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
    } catch (error) {
      console.error(error);
    }
  };

  const clearAll = () => {
    setText("");
    setResult("");
    setHashType("SHA-256");
  };
    return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          Hash Generator
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Generate secure hashes using SHA-1, SHA-256, and SHA-512 algorithms
          for development, security, and verification purposes.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Hash Algorithm
          </label>

          <select
            value={hashType}
            onChange={(e) => setHashType(e.target.value as HashType)}
            className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none"
          >
            <option value="SHA-1">SHA-1</option>
            <option value="SHA-256">SHA-256</option>
            <option value="SHA-512">SHA-512</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Input Text
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to generate hash..."
            className="min-h-[180px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={generateHash}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Generate Hash
          </button>

          <button
            onClick={copyHash}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Copy Hash
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
            Generated Hash
          </h2>

          <span className="text-sm text-gray-400">
            {result.length} Characters
          </span>
        </div>

        <textarea
          readOnly
          value={result}
          placeholder="Generated hash will appear here..."
          className="min-h-[180px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 font-mono text-gray-200 outline-none"
        />
      </div>
    </div>
  );
}