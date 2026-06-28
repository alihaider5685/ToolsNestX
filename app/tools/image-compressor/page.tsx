import ImageCompressor from "@/app/components/tools/ImageCompressor";

export default function ImageCompressorPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-bold">
          Image Compressor
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Compress JPG, PNG and WebP images online for free.
        </p>

        <ImageCompressor />

      </div>
    </main>
  );
}
