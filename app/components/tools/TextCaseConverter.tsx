"use client";

import { useMemo, useState } from "react";
import {
  Copy,
  Trash2,
  RotateCcw,
  Type,
} from "lucide-react";

export default function TextCaseConverter() {
  const [text, setText] = useState("");
  const [previousText, setPreviousText] = useState("");

  const saveState = () => {
    setPreviousText(text);
  };

  const toUpperCase = () => {
    saveState();
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    saveState();
    setText(text.toLowerCase());
  };

  const toTitleCase = () => {
    saveState();

    setText(
      text.replace(/\w\S*/g, (word) => {
        return (
          word.charAt(0).toUpperCase() +
          word.slice(1).toLowerCase()
        );
      })
    );
  };

  const toSentenceCase = () => {
    saveState();

    setText(
      text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
          c.toUpperCase()
        )
    );
  };

  const capitalizeWords = () => {
    saveState();

    setText(
      text
        .split(" ")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()
        )
        .join(" ")
    );
  };

  const inverseCase = () => {
    saveState();

    setText(
      [...text]
        .map((c) =>
          c === c.toUpperCase()
            ? c.toLowerCase()
            : c.toUpperCase()
        )
        .join("")
    );
  };

  const alternatingCase = () => {
    saveState();

    let upper = true;

    setText(
      [...text]
        .map((c) => {
          if (c === " ") return c;

          const value = upper
            ? c.toUpperCase()
            : c.toLowerCase();

          upper = !upper;

          return value;
        })
        .join("")
    );
  };

  const removeExtraSpaces = () => {
    saveState();

    setText(text.replace(/\s+/g, " ").trim());
  };

  const removeEmptyLines = () => {
    saveState();

    setText(
      text
        .split("\n")
        .filter((line) => line.trim() !== "")
        .join("\n")
    );
  };

  const undo = () => {
    setText(previousText);
  };

  const copyText = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);

    alert("Copied!");
  };

  const clearText = () => {
    setPreviousText(text);
    setText("");
  };

  const stats = useMemo(() => {
    return {
      characters: text.length,
      words: text.trim()
        ? text.trim().split(/\s+/).length
        : 0,
      lines: text
        ? text.split("\n").length
        : 0,
    };
  }, [text]);
    return (
    <div className="mt-10">
      <div className="rounded-3xl border border-gray-800 bg-[#111] p-8">
        <div className="flex items-center gap-3">
          <Type className="text-blue-500" size={30} />
          <h2 className="text-3xl font-bold text-white">
            Text Case Converter
          </h2>
        </div>

        <p className="mt-2 text-gray-400">
          Convert text into different letter cases instantly.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          className="mt-6 h-64 w-full rounded-xl border border-gray-700 bg-[#1a1a1a] p-4 text-white outline-none"
        />

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl bg-[#1a1a1a] p-3">
            <p className="text-gray-400 text-sm">Characters</p>
            <p className="text-xl font-bold text-white">{stats.characters}</p>
          </div>

          <div className="rounded-xl bg-[#1a1a1a] p-3">
            <p className="text-gray-400 text-sm">Words</p>
            <p className="text-xl font-bold text-white">{stats.words}</p>
          </div>

          <div className="rounded-xl bg-[#1a1a1a] p-3">
            <p className="text-gray-400 text-sm">Lines</p>
            <p className="text-xl font-bold text-white">{stats.lines}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          <button onClick={toUpperCase} className="rounded-xl bg-blue-600 py-3 text-white font-semibold">UPPERCASE</button>

          <button onClick={toLowerCase} className="rounded-xl bg-blue-600 py-3 text-white font-semibold">lowercase</button>

          <button onClick={toTitleCase} className="rounded-xl bg-blue-600 py-3 text-white font-semibold">Title Case</button>

          <button onClick={toSentenceCase} className="rounded-xl bg-blue-600 py-3 text-white font-semibold">Sentence Case</button>

          <button onClick={capitalizeWords} className="rounded-xl bg-green-600 py-3 text-white font-semibold">Capitalize</button>

          <button onClick={inverseCase} className="rounded-xl bg-green-600 py-3 text-white font-semibold">Inverse</button>

          <button onClick={alternatingCase} className="rounded-xl bg-green-600 py-3 text-white font-semibold">aLtErNaTiNg</button>

          <button onClick={removeExtraSpaces} className="rounded-xl bg-purple-600 py-3 text-white font-semibold">Remove Spaces</button>

          <button onClick={removeEmptyLines} className="rounded-xl bg-purple-600 py-3 text-white font-semibold">Remove Empty Lines</button>

          <button
            onClick={undo}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-600 py-3 text-white"
          >
            <RotateCcw size={18} />
            Undo
          </button>

          <button
            onClick={copyText}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-600 py-3 text-white"
          >
            <Copy size={18} />
            Copy
          </button>

          <button
            onClick={clearText}
            className="flex items-center justify-center gap-2 rounded-xl border border-red-600 py-3 text-red-400"
          >
            <Trash2 size={18} />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
