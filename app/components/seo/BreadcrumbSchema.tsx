import Script from "next/script";
import { breadcrumbSchema } from "@/lib/schema";

type BreadcrumbSchemaProps = {
  name: string;
  path: string;
};

export default function BreadcrumbSchema({
  name,
  path,
}: BreadcrumbSchemaProps) {
  const schema = breadcrumbSchema({
    name,
    path,
  });

  return (
    <Script
      id={`breadcrumb-schema-${path.replace(/\//g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}