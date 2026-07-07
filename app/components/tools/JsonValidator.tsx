"use client";

import { useState } from "react";

export default function JsonValidator() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState("");

  const validateJson = () => {
    if (!input.trim()) {
      setIsValid(null);
      setError("");
      return;
    }

    try {
      JSON.parse(input);

      setIsValid(true);
      setError("");
    } catch (err) {
      setIsValid(false);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid JSON");
      }
    }
  };

  const copyJson = async () => {
    if (!input) return;

    try {
      await navigator.clipboard.writeText(input);
    } catch (error) {
      console.error(error);
    }
  };

  const clearAll = () => {
    setInput("");
    setIsValid(null);
    setError("");
  };

  const characterCount = input.length;
    return (
    <div className="mx-auto max-w-screen-2xl max-w-5xl py-10">
      <div className="mb-8 text-center">
        
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <label className="mb-3 block text-sm font-medium text-gray-300">
          JSON Input
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className="min-h-[250px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 font-mono text-gray-200 outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={validateJson}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Validate JSON
          </button>

          <button
            onClick={copyJson}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Copy JSON
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

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Validation Result
          </h2>

          <span className="text-sm text-gray-400">
            {characterCount} Characters
          </span>
        </div>

        {isValid === null && (
          <div className="rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-400">
            Enter JSON and click "Validate JSON".
          </div>
        )}

        {isValid === true && (
          <div className="rounded-xl border border-green-800 bg-green-950/30 p-4 text-green-400">
            ✅ Valid JSON
          </div>
        )}

        {isValid === false && (
          <div className="rounded-xl border border-red-800 bg-red-950/30 p-4">
            <p className="font-medium text-red-400">
              ❌ Invalid JSON
            </p>

            <p className="mt-2 break-words text-sm text-red-300">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}