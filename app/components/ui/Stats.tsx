
export default function Stats() {
  const stats = [
    {
      number: "28+",
      title: "Online Tools",
    },
    {
      number: "4",
      title: "Tool Categories",
    },
    {
      number: "100%",
      title: "Free Access",
    },
    {
      number: "24/7",
      title: "Available",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#111] p-8 text-center transition duration-300 hover:border-blue-500"
            >
              <h2 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
