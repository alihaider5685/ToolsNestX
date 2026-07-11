import SqlFormatter from "@/app/components/tools/SqlFormatter";
import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolSchema from "@/app/components/seo/ToolSchema";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata: Metadata = generateToolMetadata({
  title:
    "Free SQL Formatter Online | Beautify & Format SQL Queries | ToolsNestX",

  description:
    "Format, beautify and organize SQL queries online for free. Improve SQL readability with proper indentation and formatting for MySQL, PostgreSQL, SQL Server, Oracle and more.",

  keywords: [
    "sql formatter",
    "format sql",
    "beautify sql",
    "sql beautifier",
    "sql pretty print",
    "online sql formatter",
    "free sql formatter",
    "sql query formatter",
    "sql formatter online",
    "sql code formatter",
    "sql query beautifier",
    "mysql formatter",
    "postgresql formatter",
    "sql server formatter",
    "oracle sql formatter",
    "sqlite formatter",
    "database query formatter",
    "sql syntax formatter",
    "developer sql tools",
    "database tools",
    "sql code beautifier",
    "sql indentation",
    "sql editor",
    "sql parser",
    "sql optimizer",
    "web developer tools",
    "browser sql formatter",
    "best sql formatter",
    "format sql queries",
    "toolsnestx sql formatter",
  ],

  path: "/tools/sql-formatter",
});

export default function SqlFormatterPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="SQL Formatter"
  description="Format and beautify SQL queries online for better readability and easier debugging."
  path="/tools/sql-formatter"
/>
<BreadcrumbSchema
  name="SQL Formatter"
  path="/tools/sql-formatter"
/>

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

              Developer Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              SQL Formatter

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Format SQL queries instantly with proper indentation, line breaks
              and consistent styling. Improve readability, organize complex
              database queries and make SQL code easier to understand using our
              fast, secure and browser-based SQL Formatter.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Safe Formatting

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Results

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Lock className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Browser Based

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <MonitorSmartphone className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Works Everywhere

              </span>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= TOOL ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_40px_rgba(59,130,246,.08)]">

            <SqlFormatter />

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= ADVERTISEMENT ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-gray-700 bg-white/[0.02] text-gray-500">

            Google AdSense (728 × 90)

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= FEATURES ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              FEATURES

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Choose Our SQL Formatter?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Beautify SQL queries instantly with clean formatting, proper
              indentation and improved readability. Perfect for developers,
              database administrators and students working with SQL.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Feature Cards will continue in Part 2 */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Clean & Readable SQL

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Automatically organize SQL statements with proper indentation,
                line breaks and consistent formatting, making complex queries
                much easier to read and maintain.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Supports Complex Queries

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Format everything from simple SELECT statements to complex
                JOINs, nested subqueries, Common Table Expressions (CTEs) and
                large SQL scripts with consistent styling.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Formatting

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Your SQL queries are formatted directly inside your browser,
                ensuring your database scripts remain private without being
                uploaded to external servers.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Developer Friendly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Improve collaboration by generating clean, standardized SQL
                code that's easier to review, debug and share with your team.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Works With Popular Databases

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Format SQL written for MySQL, PostgreSQL, SQL Server, SQLite,
                MariaDB and many other SQL-based database systems with ease.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free & Unlimited

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Format unlimited SQL queries online without creating an
                account, installing software or paying subscription fees.
                ToolsNestX keeps the tool completely free.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />

      {/* ================= HOW TO USE ================= */}

      <section className="px-6 py-24">

       <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              HOW TO USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Format SQL In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            {/* Steps will continue in Part 3 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            1

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Paste Your SQL Query

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Copy and paste your SQL statement into the editor. The tool supports
            everything from simple queries to large SQL scripts.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            2

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Click Format

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Press the Format button to automatically organize keywords,
            indentation and line breaks for a clean, consistent SQL layout.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            3

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Copy the Formatted SQL

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Copy the formatted SQL query and use it in your project,
            documentation or database management tool with improved readability.

          </p>

        </div>

      </div>

    </div>

  </section>

  <div className="h-10 bg-black" />

  {/* ================= WHY USE ================= */}

  <section className="px-6 py-20">

    <div className="mx-auto max-w-screen-2xl">

      <div className="text-center">

        <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

          WHY USE

        </span>

        <h2 className="mt-6 text-4xl font-bold">

          Why Use Our SQL Formatter?

        </h2>

      </div>

      <div className="h-5 bg-black" />

      <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

        <p>

          SQL queries often become difficult to read as they grow in size and
          complexity. Long statements with multiple JOINs, nested subqueries,
          CASE expressions and filtering conditions can quickly become hard to
          understand and maintain. A SQL Formatter automatically organizes your
          queries using consistent indentation and spacing, making database code
          cleaner and significantly easier to read.

        </p>

        <p>

          Well-formatted SQL improves collaboration between developers,
          database administrators and data analysts. Clean query formatting
          helps reduce mistakes during code reviews, simplifies debugging and
          makes complex database logic easier to follow. Whether you're working
          with MySQL, PostgreSQL, SQL Server, SQLite or MariaDB, properly
          formatted SQL is considered a best practice for professional database
          development.

        </p>

        <p>

          ToolsNestX SQL Formatter performs all formatting directly inside your
          browser, helping keep your SQL queries private and secure. No data is
          uploaded, no software installation is required and no registration is
          needed. Simply paste your SQL, format it instantly and continue
          working with clean, production-ready database queries.

        </p>

      </div>

    </div>

  </section>

  <div className="h-10 bg-black" />
        {/* ================= FAQ ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              FAQ

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Frequently Asked Questions

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Find answers to common questions about formatting SQL queries with
              our free online SQL Formatter.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is SQL Formatter free to use?",
                a: "Yes. ToolsNestX SQL Formatter is completely free and lets you format unlimited SQL queries without creating an account.",
              },
              {
                q: "Will formatting change my SQL query?",
                a: "No. The formatter only improves the layout, indentation and spacing of your SQL code. It does not modify the query logic or database operations.",
              },
              {
                q: "Is my SQL query secure?",
                a: "Yes. Your SQL is formatted directly inside your browser. Nothing is uploaded to external servers, helping keep your database queries private.",
              },
              {
                q: "Which SQL databases are supported?",
                a: "The formatter works with standard SQL syntax commonly used in MySQL, PostgreSQL, SQL Server, SQLite, MariaDB and many other SQL-based database systems.",
              },
              {
                q: "Can I format large SQL scripts?",
                a: "Yes. You can format both short SQL statements and large database scripts containing multiple queries, joins and nested subqueries.",
              },
              {
                q: "Who should use this SQL Formatter?",
                a: "This tool is ideal for developers, database administrators, students, data analysts and anyone who wants cleaner, easier-to-read SQL code.",
              },
            ].map((item) => (

              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30"
              >

                <summary className="cursor-pointer text-lg font-semibold">

                  {item.q}

                </summary>

                <p className="mt-5 leading-8 text-gray-400">

                  {item.a}

                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= RELATED TOOLS ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              RELATED TOOLS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Explore More Developer Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                SQL Minifier

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compress SQL queries by removing unnecessary whitespace and formatting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify and validate JSON with clean, readable formatting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                CSS Minifier

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Optimize CSS by removing unnecessary characters and reducing file size.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                HTML Minifier

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Minify HTML code to improve loading speed and reduce page size.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= BOTTOM AD ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-gray-700 bg-white/[0.02] text-gray-500">

            Google AdSense (Responsive)

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= CTA ================= */}

      <section className="px-6 pb-28">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-16 text-center">

            <h2 className="text-4xl font-bold">

              Format SQL Queries Instantly

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Beautify SQL queries with clean indentation and consistent formatting.
              Improve readability, simplify debugging and generate professional,
              well-structured SQL directly in your browser with ToolsNestX.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Format SQL Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}