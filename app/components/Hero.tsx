export default function Hero() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center pt-20 gap-10 bg-white min-h-screen z-0">

      {/* LEFT CONTENT */}
      <div className="flex-1 z-10 ml-10">
        <h1 className="text-5xl font-bold mb-4">
          Lorem ipsum dolor sit amet
        </h1>

        <p className="text-gray-600 mb-6 max-w-lg">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
          sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
          imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.
          Nunc euismod ultrices etiam nulla habitasse.
        </p>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter email"
            className="border px-4 py-2 rounded-md w-64"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Submit →
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
          <span className="text-sm text-gray-600 font-medium">
            No credit card required!
          </span>
        </div>
      </div>

      {/* RIGHT IMAGE COLORED WITH DIAGONAL CUT */}
      <div className="flex-1 h-screen relative -mt-20">
        <div
          className="
            absolute inset-0 
            bg-cover bg-center
          "
          style={{
            backgroundImage: "url('/cover.png')",
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
          }}
        />
      </div>
    </section>
  );
}
