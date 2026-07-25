"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, Download, RefreshCw, FileType } from "lucide-react";
import { convertImage } from "@/app/lib/image/convertImage";
import { downloadImage } from "@/app/lib/image/downloadImage";

const formats = [
  { label: "PNG", value: "png" },
  { label: "JPG", value: "jpg" },
  { label: "WEBP", value: "webp" },
];

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [format, setFormat] = useState("png");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleConvert = async () => {
    if (!image) return;

    try {
      setLoading(true);

      const blob = await convertImage(image, format);

      downloadImage(blob, image.name, format);
    } catch (error) {
      console.error(error);
      alert("Image conversion failed.");
    } finally {
      setLoading(false);
    }
  };

  const resetImage = () => {
    setImage(null);
    setPreview("");
    setFormat("png");
  };

  const currentExt = image?.name.split(".").pop()?.toUpperCase() || "";

  return (
    <div className="mt-10">
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-[#111827] p-12 hover:border-blue-400 hover:bg-[#161f31]">
        <Upload size={60} className="mb-4 text-blue-500" />

        <h2 className="text-2xl font-bold text-white">Drag & Drop Image</h2>

        <p className="mt-2 text-gray-400">Click below to upload your image</p>

        <span className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
          <ImageIcon className="h-5 w-5" />
          Choose Image
        </span>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {image && (
        <div className="mt-10 rounded-3xl border border-gray-800 bg-[#111] p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <img
                src={preview}
                alt="Preview"
                className="w-full rounded-2xl border border-gray-700"
              />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <ImageIcon className="text-blue-500" />
                <h2 className="text-2xl font-bold text-white">Image Details</h2>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-gray-400">File Name</p>
                  <p className="truncate text-sm text-white">{image.name}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-gray-400">File Size</p>
                  <p className="text-sm text-white">
                    {(image.size / 1024).toFixed(2)} KB
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:col-span-2">
                  <p className="text-xs text-gray-400">Current Format</p>
                  <p className="text-sm text-white">{currentExt || "Unknown"}</p>
                </div>
              </div>

              <div className="mt-8">
                <label className="mb-2 flex items-center gap-2 text-white">
                  <FileType className="h-4 w-4 text-blue-500" />
                  Output Format
                </label>

                <div className="flex gap-2">
                  {formats.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFormat(f.value)}
                      className={`flex-1 rounded-xl border py-3 text-sm font-semibold ${
                        format === f.value
                          ? "border-blue-500 bg-blue-600 text-white"
                          : "border-gray-700 bg-[#1a1a1a] text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleConvert}
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Download className="h-5 w-5" />
                {loading ? "Converting..." : "Convert & Download"}
              </button>

              <button
                onClick={resetImage}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-700 py-4 font-semibold text-white hover:bg-gray-800"
              >
                <RefreshCw className="h-5 w-5" />
                Upload Another Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}