"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import { Upload } from "lucide-react";

export default function ImageCompressor() {
 const [inputKey, setInputKey] = useState(Date.now());
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [quality, setQuality] = useState(80);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];

    setImage(file);
    setPreview(URL.createObjectURL(file));
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

  return (
    <div className="mt-10">

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-[#111827] p-12">

        <Upload size={60} className="mb-4 text-blue-500" />

        <h2 className="text-2xl font-bold text-white">
          Upload Image
        </h2>

        <p className="mt-2 text-gray-400">
          Select an image to compress
        </p>

        <span className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white">
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

          <img
            src={preview}
            alt="Preview"
            className="mb-6 w-72 rounded-xl"
          />

          <p className="text-white">
            <strong>Name:</strong> {image.name}
          </p>

          <p className="mb-6 text-white">
            <strong>Original Size:</strong>{" "}
            {(image.size / 1024).toFixed(2)} KB
          </p>

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

          <button
  onClick={handleCompress}
  disabled={loading}
  className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
>
  {loading ? "Compressing..." : "Compress & Download"}
</button>

{/* Reset Button */}
<button
  onClick={() => {
    setImage(null);
    setPreview("");
    setQuality(80);
  }}
  className="mt-4 w-full rounded-xl border border-gray-600 py-4 text-white hover:bg-gray-800"
>
  Upload Another Image
</button>

</div>
)}
</div>
);
}