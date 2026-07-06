"use client";

import { useState } from "react";

export default function UuidGenerator() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);

  const generateUuid = () => {
    return crypto.randomUUID();
  };

  const handleGenerate = () => {
    const safeCount = Math.max(1, Math.min(count, 100));

    const generated = Array.from(
      { length: safeCount },
      () => generateUuid()
    );

    setUuids(generated);
  };

  const handleCopyAll = async () => {
    if (!uuids.length) return;

    try {
      await navigator.clipboard.writeText(
        uuids.join("\n")
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopySingle = async (uuid: string) => {
    try {
      await navigator.clipboard.writeText(uuid);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    if (!uuids.length) return;

    const blob = new Blob(
      [uuids.join("\n")],
      { type: "text/plain" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "uuids.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setUuids([]);
    setCount(5);
  };
    return (
    <div className="mx-auto w-full max-w-screen-2xl max-w-7xl py-10">
      <div className="mb-8 text-center">
        

        <p className="mx-auto max-w-8xl text-gray-400">
          Generate secure UUID v4 identifiers for applications, databases,
          APIs, testing, and development projects.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Number of UUIDs
            </label>

            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleGenerate}
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Generate UUIDs
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={handleCopyAll}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Copy All
          </button>

          <button
            onClick={handleDownload}
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Download TXT
          </button>

          <button
            onClick={handleClear}
            className="rounded-xl border border-red-800 px-5 py-3 font-medium text-red-400 transition hover:bg-red-950"
          >
            Clear
          </button>
        </div>
      </div>

    <div className="h-5 bg-black" />

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Generated UUIDs
          </h2>

          <span className="text-sm text-gray-400">
            {uuids.length} Generated
          </span>
        </div>

        <div className="space-y-3">
          {uuids.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-700 p-6 text-center text-gray-500">
              No UUIDs generated yet.
            </div>
          ) : (
            uuids.map((uuid, index) => (
              <div
                key={uuid}
                className="flex flex-col gap-3 rounded-xl border border-gray-800 bg-gray-950 p-4 md:flex-row md:items-center md:justify-between"
              >
                <span className="break-all font-mono text-sm text-gray-200">
                  {index + 1}. {uuid}
                </span>

                <button
                  onClick={() => handleCopySingle(uuid)}
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
                >
                  Copy
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}