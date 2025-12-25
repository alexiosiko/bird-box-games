export default function DevPhotos() {
  const images = [
    "Στιγμιότυπο οθόνης 2025-12-25 125625.png",
    "Στιγμιότυπο οθόνης 2025-12-25 125701.png",
    "Στιγμιότυπο οθόνης 2025-12-25 125742.png",
  ];

  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-6 justify-center">
          {images.map((name) => (
            <img
              key={name}
              src={`/images/${encodeURIComponent(name)}`}
              alt={name}
              className="w-full md:w-80 lg:w-96 h-56 md:h-64 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
