"use client";

import { useState } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [testText, setTestText] = useState("");
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState("");

  const [globalFlag, setGlobalFlag] = useState(true);
  const [ignoreCaseFlag, setIgnoreCaseFlag] = useState(false);
  const [multilineFlag, setMultilineFlag] = useState(false);

  const runRegex = () => {
    try {
      setError("");

      let flags = "";

      if (globalFlag) flags += "g";
      if (ignoreCaseFlag) flags += "i";
      if (multilineFlag) flags += "m";

      const regex = new RegExp(pattern, flags);

      const results = testText.match(regex);

      setMatches(results || []);
    } catch {
      setMatches([]);
      setError("Invalid regular expression.");
    }
  };

  const copyMatches = async () => {
    if (!matches.length) return;

    try {
      await navigator.clipboard.writeText(
        matches.join("\n")
      );
    } catch (error) {
      console.error(error);
    }
  };

  const clearAll = () => {
    setPattern("");
    setTestText("");
    setMatches([]);
    setError("");
    setGlobalFlag(true);
    setIgnoreCaseFlag(false);
    setMultilineFlag(false);
  };
    return (
    <div className="mx-auto max-w-6xl py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          Regex Tester
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Test regular expressions, find matches, and validate patterns in real
          time.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Regex Pattern
          </label>

          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="\d+"
            className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none"
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              checked={globalFlag}
              onChange={(e) => setGlobalFlag(e.target.checked)}
            />
            Global (g)
          </label>

          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              checked={ignoreCaseFlag}
              onChange={(e) => setIgnoreCaseFlag(e.target.checked)}
            />
            Ignore Case (i)
          </label>

          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              checked={multilineFlag}
              onChange={(e) => setMultilineFlag(e.target.checked)}
            />
            Multiline (m)
          </label>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Test Text
          </label>

          <textarea
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            placeholder="Enter text to test..."
            className="min-h-[220px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={runRegex}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Run Regex
          </button>

          <button
            onClick={copyMatches}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Copy Matches
          </button>

          <button
            onClick={clearAll}
            className="rounded-xl border border-red-800 px-5 py-3 font-medium text-red-400 transition hover:bg-red-950"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-xl border border-red-900 bg-red-950/40 p-3 text-red-400">
            {error}
          </div>
        )}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Matches
          </h2>

          <span className="text-sm text-gray-400">
            {matches.length} Match{matches.length !== 1 ? "es" : ""}
          </span>
        </div>

        {matches.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-700 p-6 text-center text-gray-500">
            No matches found.
          </div>
        ) : (
          <div className="space-y-3">
            {matches.map((match, index) => (
              <div
                key={`${match}-${index}`}
                className="rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
              >
                {match}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
