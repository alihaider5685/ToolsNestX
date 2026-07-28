"use client";

import { useState } from "react";
import { Upload, FileText } from "lucide-react";
import { mergePdf } from "@/app/lib/pdf/mergePdf";

export default function PDFUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputKey, setInputKey] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    setFiles(Array.from(e.target.files));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }

    try {
      setLoading(true);

      const blob = await mergePdf(files);

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("PDF merge failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-3xl">

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-[#111827] px-10 py-16 transition hover:border-blue-400 hover:bg-[#141d33]">

        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10">
          <Upload size={40} className="text-blue-500" />
        </div>

        <h2 className="text-3xl font-bold text-white">
          Upload PDF Files
        </h2>

        <p className="mt-3 text-base text-gray-400">
          Select two or more PDF files
        </p>

        <span className="mt-8 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-700">
          Choose PDFs
        </span>

        <input
          key={inputKey}
          type="file"
          accept=".pdf"
          multiple
          onChange={handleChange}
          className="hidden"
        />

      </label>

      {files.length > 0 && (
        <div className="mt-8 rounded-2xl border border-gray-700 bg-[#111] p-8">

          <div className="flex items-center gap-3">
            <FileText size={26} className="text-blue-500" />
            <h2 className="text-2xl font-bold text-white">
              Selected Files
            </h2>
          </div>

          <div className="mt-6 space-y-3">

            {files.map((file, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-700 bg-[#1a1a1a] px-5 py-4 text-white"
              >
                <p className="text-base font-medium">{file.name}</p>

                <p className="mt-1 text-sm text-gray-400">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            ))}

          </div>

          <button
            onClick={handleMerge}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-base font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Merging..." : "Merge & Download"}
          </button>

          <button
            onClick={() => {
              setFiles([]);
              setInputKey((k) => k + 1);
            }}
            className="mt-4 w-full rounded-xl border border-gray-600 py-4 text-base text-white transition hover:bg-gray-800"
          >
            Upload Other PDFs
          </button>

        </div>
      )}

    </div>
  );
}