"use client";

import { useState } from "react";
import {
  Copy,
  Trash2,
  RefreshCw,
  FileImage,
} from "lucide-react";

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");

  const encodeText = () => {
    try {
      setError("");
      setOutput(btoa(unescape(encodeURIComponent(input))));
    } catch {
      setError("Encoding failed.");
    }
  };

  const decodeText = () => {
    try {
      setError("");
      setOutput(decodeURIComponent(escape(atob(input))));
    } catch {
      setError("Invalid Base64 string.");
    }
  };

  const copyOutput = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);

    alert("Copied!");
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setImagePreview("");
    setError("");
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;

      setImagePreview(result);

      setOutput(result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="mt-10">
      <div className="rounded-3xl border border-gray-800 bg-[#111] p-8">
        <div className="flex items-center gap-3">
          <FileImage className="text-blue-500" size={30} />
          <h2 className="text-3xl font-bold text-white">
            Base64 Encoder / Decoder
          </h2>
        </div>

        <p className="mt-2 text-gray-400">
          Encode text, decode Base64 strings, or convert images to Base64.
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or Base64 string..."
          className="mt-6 h-40 w-full rounded-xl border border-gray-700 bg-[#1a1a1a] p-4 text-white outline-none"
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={encodeText}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Encode
          </button>

          <button
            onClick={decodeText}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Decode
          </button>

          <label className="cursor-pointer rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </label>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-600 bg-red-950 p-4 text-red-400">
            {error}
          </div>
        )}

        {(output || imagePreview) && (
          <>
            {imagePreview && (
              <div className="mt-8">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mx-auto max-h-64 rounded-xl border border-gray-700"
                />
              </div>
            )}

            <textarea
              readOnly
              value={output}
              className="mt-6 h-48 w-full rounded-xl border border-gray-700 bg-[#1a1a1a] p-4 text-green-400 outline-none"
            />

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={copyOutput}
                className="flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 text-white hover:bg-gray-800"
              >
                <Copy size={18} />
                Copy
              </button>

              <button
                onClick={clearAll}
                className="flex items-center gap-2 rounded-xl border border-red-600 px-6 py-3 text-red-400 hover:bg-red-950"
              >
                <Trash2 size={18} />
                Clear
              </button>

              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 rounded-xl border border-blue-600 px-6 py-3 text-blue-400 hover:bg-blue-950"
              >
                <RefreshCw size={18} />
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}