"use client";

import { useState } from "react";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const convertTimestampToDate = () => {
    try {
      setError("");

      const unix = Number(timestamp);

      if (!unix) {
        setError("Please enter a valid timestamp.");
        return;
      }

      const date = new Date(unix * 1000);

      setResult(date.toUTCString());
    } catch {
      setError("Invalid timestamp.");
    }
  };

  const convertDateToTimestamp = () => {
    try {
      setError("");

      if (!dateValue) {
        setError("Please select a date.");
        return;
      }

      const unix = Math.floor(
        new Date(dateValue).getTime() / 1000
      );

      setResult(unix.toString());
    } catch {
      setError("Invalid date.");
    }
  };

  const getCurrentTimestamp = () => {
    setTimestamp(
      Math.floor(Date.now() / 1000).toString()
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
    setTimestamp("");
    setDateValue("");
    setResult("");
    setError("");
  };
    return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          Timestamp Converter
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Convert Unix timestamps to human-readable dates and convert dates back
          to Unix timestamps instantly.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Unix Timestamp
            </label>

            <input
              type="text"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              placeholder="1719859200"
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none"
            />

            <div className="mt-3 flex flex-wrap gap-3">
              <button
                onClick={convertTimestampToDate}
                className="rounded-xl bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700"
              >
                Convert to Date
              </button>

              <button
                onClick={getCurrentTimestamp}
                className="rounded-xl border border-gray-700 px-4 py-3 text-white transition hover:bg-gray-800"
              >
                Current Timestamp
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Date
            </label>

            <input
              type="date"
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none"
            />

            <div className="mt-3">
              <button
                onClick={convertDateToTimestamp}
                className="rounded-xl bg-green-600 px-4 py-3 text-white transition hover:bg-green-700"
              >
                Convert to Timestamp
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-900 bg-red-950/40 p-3 text-red-400">
            {error}
          </div>
        )}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Result
          </h2>

          <button
            onClick={copyResult}
            className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
          >
            Copy
          </button>
        </div>

        <textarea
          readOnly
          value={result}
          placeholder="Converted result will appear here..."
          className="min-h-[150px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

        <div className="mt-4">
          <button
            onClick={clearAll}
            className="rounded-xl border border-red-800 px-5 py-3 font-medium text-red-400 transition hover:bg-red-950"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}