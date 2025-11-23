import Image from "next/image";
import Landing from "./landing page/Landing";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white">
      <Landing/>
    </main>
  );
}
