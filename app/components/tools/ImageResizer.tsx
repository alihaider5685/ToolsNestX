
"use client";
 
import { useState, useRef } from "react";
import { Upload, Image as ImageIcon, Lock, Unlock } from "lucide-react";
 
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
 
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
 
  <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-[#111827] p-12 transition hover:border-blue-400 hover:bg-[#161f31]">
 
    <Upload size={60} className="mb-4 text-blue-500" />
 
    <h2 className="text-2xl font-bold text-white">
      Drag & Drop Image
    </h2>
 
    <p className="mt-2 text-gray-400">
      Click below to upload your image
    </p>
 
    <span className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
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
 
            <h2 className="text-2xl font-bold text-white">
              Image Details
            </h2>
          </div>
 
          <div className="mt-8 space-y-4">
 
            <div>
              <p className="text-sm text-gray-400">
                File Name
              </p>
 
              <p className="text-white">
                {image.name}
              </p>
            </div>
 
            <div>
              <p className="text-sm text-gray-400">
                File Size
              </p>
 
              <p className="text-white">
                {(image.size / 1024).toFixed(2)} KB
              </p>
            </div>
 
            <div>
              <p className="text-sm text-gray-400">
                Original Dimensions
              </p>
 
              <p className="text-white">
                {originalWidth} x {originalHeight} px
              </p>
            </div>
 
          </div>
 
          <div className="mt-8 grid grid-cols-2 gap-4">
 
            <div>
              <label className="mb-2 block text-white">
                Width (px)
              </label>
 
              <input
                type="number"
                value={width}
                onChange={(e) => handleWidthChange(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-700 bg-[#1a1a1a] px-4 py-3 text-white"
              />
            </div>
 
            <div>
              <label className="mb-2 block text-white">
                Height (px)
              </label>
 
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
            className="mt-4 flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            {lockAspect ? (
              <Lock size={16} className="text-blue-500" />
            ) : (
              <Unlock size={16} />
            )}
            {lockAspect ? "Aspect ratio locked" : "Aspect ratio unlocked"}
          </button>
 
          <div className="mt-8">
 
            <label className="mb-2 block text-white">
              Output Format
            </label>
 
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-[#1a1a1a] px-4 py-3 text-white"
            >
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="webp">WEBP</option>
            </select>
 
          </div>
 
          <button
            onClick={handleResize}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Resizing..." : "Resize & Download"}
          </button>
 
          <button
            onClick={resetImage}
            className="mt-4 w-full rounded-xl border border-gray-700 py-4 font-semibold text-white transition hover:bg-gray-800"
          >
            Upload Another Image
          </button>
 
        </div>
 
      </div>
 
    </div>
  )}
 
</div>
  );
}
 