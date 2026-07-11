import Script from "next/script";
import { toolSchema } from "@/lib/schema";

type ToolSchemaProps = {
  name: string;
  description: string;
  path: string;
};

export default function ToolSchema({
  name,
  description,
  path,
}: ToolSchemaProps) {
  const schema = toolSchema({
    name,
    description,
    path,
  });

  return (
    <Script
      id={`tool-schema-${path.replace(/\//g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    /> 
  );
}