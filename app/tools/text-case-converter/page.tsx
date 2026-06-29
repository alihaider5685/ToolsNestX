import Container from "@/app/components/layout/Container";
import TextCaseConverter from "@/app/components/tools/TextCaseConverter";

export default function Page() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="mb-3 text-center text-5xl font-bold text-white">
          Text Case Converter
        </h1>

        <p className="mb-10 text-center text-gray-400">
          Convert text to uppercase, lowercase, title case, sentence case and more.
        </p>

        <TextCaseConverter />
      </div>
    </Container>
  );
}