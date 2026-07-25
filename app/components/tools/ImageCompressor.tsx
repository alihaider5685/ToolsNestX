"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import {
  Upload,
  Download,
  RefreshCw,
  ImageIcon,
  FileDown,
  Gauge,
} from "lucide-react";

export default function ImageCompressor() {
  const [inputKey, setInputKey] = useState(Date.now());
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [quality, setQuality] = useState(80);
  const [loading, setLoading] = useState(false);
  const [compressedInfo, setCompressedInfo] = useState<{
    size: number;
    name: string;
  } | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCompressedInfo(null);
  };

  const handleCompress = async () => {
    if (!image) return;

    try {
      setLoading(true);

      const compressed = await imageCompression(image, {
        maxSizeMB: 5,
        initialQuality: quality / 100,
        useWebWorker: true,
      });

      setCompressedInfo({
        size: compressed.size,
        name: compressed.name || "compressed-image.jpg",
      });

      const url = URL.createObjectURL(compressed);

      const a = document.createElement("a");
      a.href = url;
      a.download = compressed.name || "compressed-image.jpg";
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Compression Error:", String(error));
      alert("Compression failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setPreview("");
    setQuality(80);
    setCompressedInfo(null);
    setInputKey(Date.now());
  };

  const savedPercent =
    image && compressedInfo
      ? Math.max(
          0,
          Math.round(((image.size - compressedInfo.size) / image.size) * 100)
        )
      : null;

  return (
    <div className="mt-10">
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-[#111827] p-12 hover:bg-[#151f31]">
        <Upload size={60} className="mb-4 text-blue-500" />

        <h2 className="text-2xl font-bold text-white">Upload Image</h2>

        <p className="mt-2 text-gray-400">Select an image to compress</p>

        <span className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500">
          <ImageIcon className="h-5 w-5" />
          Choose Image
        </span>

        <input
          key={inputKey}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {image && (
        <div className="mt-8 rounded-2xl bg-[#111] p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              src={preview}
              alt="Preview"
              className="w-72 rounded-xl border border-white/10"
            />

            <div className="flex-1 space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="truncate text-white">
                  <strong>Name:</strong> {image.name}
                </p>
                <p className="text-white">
                  <strong>Original Size:</strong>{" "}
                  {(image.size / 1024).toFixed(2)} KB
                </p>
              </div>

              {compressedInfo && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <FileDown className="h-5 w-5" />
                    Compressed Size:{" "}
                    {(compressedInfo.size / 1024).toFixed(2)} KB
                  </p>
                  {savedPercent !== null && (
                    <p className="mt-1 flex items-center gap-2 text-emerald-300 text-sm">
                      <Gauge className="h-4 w-4" />
                      {savedPercent}% smaller than original
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-white">
              Compression Quality: {quality}%
            </label>

            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleCompress}
              disabled={loading}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Download className="h-5 w-5" />
              {loading ? "Compressing..." : "Compress & Download"}
            </button>

            <button
              onClick={handleReset}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-600 py-4 font-medium text-white hover:bg-gray-800"
            >
              <RefreshCw className="h-5 w-5" />
              Upload Another Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}