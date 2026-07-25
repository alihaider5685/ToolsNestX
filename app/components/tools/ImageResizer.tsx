"use client";

import { useState, useRef } from "react";
import {
  Upload,
  Image as ImageIcon,
  Lock,
  Unlock,
  Download,
  RefreshCw,
  Ruler,
  FileType,
} from "lucide-react";

const sizePresets = [
  { name: "HD", width: 1280, height: 720 },
  { name: "Full HD", width: 1920, height: 1080 },
  { name: "Instagram Post", width: 1080, height: 1080 },
  { name: "Instagram Story", width: 1080, height: 1920 },
  { name: "Twitter Post", width: 1200, height: 675 },
  { name: "YouTube Thumbnail", width: 1280, height: 720 },
];

export default function ImageResizer() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lockAspect, setLockAspect] = useState(true);
  const [format, setFormat] = useState("png");
  const [loading, setLoading] = useState(false);

  const aspectRatio = useRef(1);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    const img = new window.Image();
    img.onload = () => {
      setOriginalWidth(img.width);
      setOriginalHeight(img.height);
      setWidth(img.width);
      setHeight(img.height);
      aspectRatio.current = img.width / img.height;
    };
    img.src = url;

    setImage(file);
    setPreview(url);
  };

  const handleWidthChange = (value: number) => {
    setWidth(value);
    if (lockAspect) {
      setHeight(Math.round(value / aspectRatio.current));
    }
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
    if (lockAspect) {
      setWidth(Math.round(value * aspectRatio.current));
    }
  };

  const applyPreset = (presetWidth: number, presetHeight: number) => {
    setWidth(presetWidth);
    setHeight(presetHeight);
  };

  const applyPercentage = (percent: number) => {
    if (!originalWidth || !originalHeight) return;
    setWidth(Math.round((originalWidth * percent) / 100));
    setHeight(Math.round((originalHeight * percent) / 100));
  };

  const resizeImage = (
    file: File,
    targetWidth: number,
    targetHeight: number,
    outputFormat: string
  ): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas not supported"));

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        const mimeType =
          outputFormat === "jpg" ? "image/jpeg" : `image/${outputFormat}`;

        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error("Resize failed"));
            resolve(blob);
          },
          mimeType,
          0.92
        );
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const downloadImage = (blob: Blob, originalName: string, outputFormat: string) => {
    const nameWithoutExt = originalName.replace(/\.[^/.]+$/, "");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${nameWithoutExt}-${width}x${height}.${outputFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResize = async () => {
    if (!image || width <= 0 || height <= 0) return;

    try {
      setLoading(true);

      const blob = await resizeImage(image, width, height, format);

      downloadImage(blob, image.name, format);
    } catch (error) {
      console.error(error);
      alert("Image resizing failed.");
    } finally {
      setLoading(false);
    }
  };

  const resetImage = () => {
    setImage(null);
    setPreview("");
    setOriginalWidth(0);
    setOriginalHeight(0);
    setWidth(0);
    setHeight(0);
    setFormat("png");
  };

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

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
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

                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-gray-400">Original Dimensions</p>
                  <p className="text-sm text-white">
                    {originalWidth} x {originalHeight} px
                  </p>
                </div>
              </div>

              {/* Quick percentage resize */}
              <div className="mt-6">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <Ruler className="h-4 w-4 text-blue-500" />
                  Quick Resize
                </p>
                <div className="flex flex-wrap gap-2">
                  {[25, 50, 75, 100].map((percent) => (
                    <button
                      key={percent}
                      onClick={() => applyPercentage(percent)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium hover:bg-blue-600 hover:border-blue-500"
                    >
                      {percent}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Size presets */}
              <div className="mt-5">
                <p className="mb-2 text-sm font-semibold text-gray-300">
                  Presets
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizePresets.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => applyPreset(preset.width, preset.height)}
                      title={`${preset.width} x ${preset.height}`}
                      className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                        width === preset.width && height === preset.height
                          ? "border-blue-500 bg-blue-600 text-white"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-white">Width (px)</label>

                  <input
                    type="number"
                    value={width}
                    onChange={(e) => handleWidthChange(Number(e.target.value))}
                    className="w-full rounded-xl border border-gray-700 bg-[#1a1a1a] px-4 py-3 text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-white">Height (px)</label>

                  <input
                    type="number"
                    value={height}
                    onChange={(e) => handleHeightChange(Number(e.target.value))}
                    className="w-full rounded-xl border border-gray-700 bg-[#1a1a1a] px-4 py-3 text-white"
                  />
                </div>
              </div>

              <button
                onClick={() => setLockAspect(!lockAspect)}
                className={`mt-4 flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
                  lockAspect
                    ? "border-blue-500 bg-blue-600/10 text-blue-400"
                    : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                {lockAspect ? <Lock size={16} /> : <Unlock size={16} />}
                {lockAspect ? "Aspect ratio locked" : "Aspect ratio unlocked"}
              </button>

              <div className="mt-8">
                <label className="mb-2 flex items-center gap-2 text-white">
                  <FileType className="h-4 w-4 text-blue-500" />
                  Output Format
                </label>

                <div className="flex gap-2">
                  {["png", "jpg", "webp"].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFormat(f)}
                      className={`flex-1 rounded-xl border py-3 text-sm font-semibold uppercase ${
                        format === f
                          ? "border-blue-500 bg-blue-600 text-white"
                          : "border-gray-700 bg-[#1a1a1a] text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleResize}
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Download className="h-5 w-5" />
                {loading ? "Resizing..." : "Resize & Download"}
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