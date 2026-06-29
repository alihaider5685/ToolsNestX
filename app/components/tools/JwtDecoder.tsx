"use client";

import { useState } from "react";

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  const decodeBase64Url = (value: string) => {
    const base64 = value
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const padded =
      base64 + "=".repeat((4 - (base64.length % 4)) % 4);

    return atob(padded);
  };

  const decodeToken = () => {
    try {
      setError("");

      const parts = token.trim().split(".");

      if (parts.length < 2) {
        setError("Invalid JWT token.");
        return;
      }

      const decodedHeader = JSON.parse(
        decodeBase64Url(parts[0])
      );

      const decodedPayload = JSON.parse(
        decodeBase64Url(parts[1])
      );

      setHeader(
        JSON.stringify(decodedHeader, null, 2)
      );

      setPayload(
        JSON.stringify(decodedPayload, null, 2)
      );
    } catch {
      setError("Failed to decode JWT token.");
      setHeader("");
      setPayload("");
    }
  };

  const copyHeader = async () => {
    if (!header) return;

    try {
      await navigator.clipboard.writeText(header);
    } catch (error) {
      console.error(error);
    }
  };

  const copyPayload = async () => {
    if (!payload) return;

    try {
      await navigator.clipboard.writeText(payload);
    } catch (error) {
      console.error(error);
    }
  };

  const clearAll = () => {
    setToken("");
    setHeader("");
    setPayload("");
    setError("");
  };
    return (
    <div className="mx-auto max-w-6xl py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
          JWT Decoder
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Decode JWT tokens instantly and inspect header and payload data in a
          readable JSON format.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        <label className="mb-2 block text-sm font-medium text-gray-300">
          JWT Token
        </label>

        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste your JWT token here..."
          className="min-h-[180px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 text-gray-200 outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={decodeToken}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Decode Token
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

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Header
            </h2>

            <button
              onClick={copyHeader}
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
            >
              Copy
            </button>
          </div>

          <textarea
            readOnly
            value={header}
            placeholder="Decoded header will appear here..."
            className="min-h-[300px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 font-mono text-sm text-gray-200 outline-none"
          />
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Payload
            </h2>

            <button
              onClick={copyPayload}
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
            >
              Copy
            </button>
          </div>

          <textarea
            readOnly
            value={payload}
            placeholder="Decoded payload will appear here..."
            className="min-h-[300px] w-full rounded-xl border border-gray-700 bg-gray-950 p-4 font-mono text-sm text-gray-200 outline-none"
          />
        </div>
      </div>
    </div>
  );
}