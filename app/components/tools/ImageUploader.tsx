"use client";

import { useState } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [format, setFormat] = useState("png");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="mt-10 rounded-2xl border border-gray-700 bg-[#111] p-8">

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-300
        file:mr-4
        file:rounded-lg
        file:border-0
        file:bg-blue-600
        file:px-5
        file:py-3
        file:text-white
        hover:file:bg-blue-700"
      />

      {image && (
        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Selected Image
          </h3>

          <p className="mt-2 text-gray-400">
            {image.name}
          </p>

          <p className="text-gray-500">
            {(image.size / 1024).toFixed(2)} KB
          </p>

          <img
            src={preview}
            alt="Preview"
            className="mt-6 w-72 rounded-xl border border-gray-700"
          />

          {/* Output Format */}
          <div className="mt-8">
            <label className="mb-2 block font-medium text-white">
              Select Output Format
            </label>

            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#1a1a1a] px-4 py-3 text-white"
            >
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="webp">WEBP</option>
            </select>
          </div>

          {/* Convert Button */}
          <button
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Convert Image
          </button>

        </div>
      )}
    </div>
  );
}