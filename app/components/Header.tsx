export default function Header() {
  const navLinks = [
    { id: 1, title: "About" },
    { id: 2, title: "Read more" },
    { id: 3, title: "blah blah" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-transparent">
      <div className="flex justify-between items-center px-10 py-6">
        <div className="logo font-bold text-3xl bg-gray-400/50 p-2 px-5">
          LOGO
        </div>

        <ul className="flex gap-12 text-blue-500 font-semibold">
          {navLinks.map(link => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>

        <button className="bg-white px-8 py-2 font-semibold text-lg rounded-lg shadow-xl">
          Sign in
        </button>
      </div>
    </header>
  );
}
