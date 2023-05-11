import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-screen flex flex-col bg-gradient-to-b from-cyan-800 via-blue-950 
      to-indigo-950 items-center pt-32"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl">Guess My SR</h1>
        <div className="flex flex-row justify-center items-center">
          <p className="mr-3">Sign up for the immersive experience</p> |
          <p className="ml-3"> Already have an account? Log in</p>
        </div>
      </div>
    </div>
  );
}
