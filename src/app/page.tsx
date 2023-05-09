import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-screen flex flex-col bg-gradient-to-b from-cyan-800 via-blue-950 
      to-indigo-950 justify-center items-center"
    >
      <div>
        <h1 className="text-5xl">Welcome to Overwatching</h1>
      </div>
    </div>
  );
}
