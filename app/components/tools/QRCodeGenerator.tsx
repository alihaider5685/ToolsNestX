"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { QrCode, Download, RefreshCw, Palette, Maximize2 } from "lucide-react";

const sizePresets = [
  { name: "Small", size: 300 },
  { name: "Medium", size: 512 },
  { name: "Large", size: 1024 },
  { name: "Extra Large", size: 2048 },
];

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(512);
  const [darkColor, setDarkColor] = useState("#000000");
  const [lightColor, setLightColor] = useState("#ffffff");

  const generateQR = async () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    try {
      setLoading(true);

      const url = await QRCode.toDataURL(text, {
        width: size,
        margin: 2,
        errorCorrectionLevel: "H",
        color: {
          dark: darkColor,
          light: lightColor,
        },
      });

      setQr(url);
    } catch (error) {
      console.error(error);
      alert("QR generation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setText("");
    setQr("");
  };

  return (
    <div className="mt-10">
      <div className="rounded-3xl border border-gray-800 bg-[#111] p-8">
        <div className="flex items-center gap-3">
          <QrCode className="text-blue-500" size={30} />
          <h2 className="text-3xl font-bold text-white">QR Code Generator</h2>
        </div>

        <p className="mt-2 text-gray-400">
          Enter any text or URL and generate a high-quality QR code instantly.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://example.com"
          className="mt-6 h-32 w-full rounded-xl border border-gray-700 bg-[#1a1a1a] p-4 text-white outline-none focus:border-blue-500"
        />

        {/* Size presets */}
        <div className="mt-6">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-300">
            <Maximize2 className="h-4 w-4 text-blue-500" />
            Size ({size}x{size}px)
          </p>
          <div className="flex flex-wrap gap-2">
            {sizePresets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => setSize(preset.size)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                  size === preset.size
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-300">
              <Palette className="h-4 w-4 text-blue-500" />
              QR Color
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-gray-700 bg-[#1a1a1a] p-2">
              <input
                type="color"
                value={darkColor}
                onChange={(e) => setDarkColor(e.target.value)}
                className="h-9 w-9 cursor-pointer rounded-lg border border-white/10 bg-transparent"
              />
              <span className="text-sm text-gray-300">{darkColor}</span>
            </div>
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-300">
              <Palette className="h-4 w-4 text-blue-500" />
              Background
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-gray-700 bg-[#1a1a1a] p-2">
              <input
                type="color"
                value={lightColor}
                onChange={(e) => setLightColor(e.target.value)}
                className="h-9 w-9 cursor-pointer rounded-lg border border-white/10 bg-transparent"
              />
              <span className="text-sm text-gray-300">{lightColor}</span>
            </div>
          </div>
        </div>

        <button
          onClick={generateQR}
          disabled={loading}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <QrCode className="h-5 w-5" />
          {loading ? "Generating..." : "Generate QR Code"}
        </button>

        {qr && (
          <div className="mt-10 text-center">
            <div className="inline-block rounded-2xl bg-white p-4">
              <img
                src={qr}
                alt="QR Code"
                className="mx-auto h-64 w-64 rounded-lg object-contain"
              />
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Downloads at full {size}x{size}px resolution
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={qr}
                download="qrcode.png"
                className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-500"
              >
                <Download className="h-5 w-5" />
                Download QR Code
              </a>

              <button
                onClick={handleReset}
                className="flex items-center gap-2 rounded-xl border border-gray-600 px-8 py-3 font-medium text-white hover:bg-gray-800"
              >
                <RefreshCw className="h-5 w-5" />
                Generate Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}