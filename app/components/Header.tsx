"use client";

import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { id: number; title: string }[] = [
    { id: 1, title: "About" },
    { id: 2, title: "Read more" },
    { id: 3, title: "blah blah" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-white/40 dark:bg-black/30 backdrop-blur-lg shadow-lg py-5 mt-5 mx-5 rounded-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center px-10">
        <div className="logo font-bold text-3xl bg-gray-400/50 p-2 px-5">
          LOGO
        </div>

        <ul className="flex gap-12 text-blue-500 font-semibold">
          {navLinks.map((link) => (
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
