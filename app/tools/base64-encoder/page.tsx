import Container from "@/app/components/layout/Container";
import Base64Encoder from "@/app/components/tools/Base64Encoder";

export default function Page() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="mb-3 text-center text-5xl font-bold text-white">
          Base64 Encoder / Decoder
        </h1>

        <p className="mb-10 text-center text-gray-400">
          Encode and decode Base64 instantly. Supports both text and images.
        </p>

        <Base64Encoder />
      </div>
    </Container>
  );
}