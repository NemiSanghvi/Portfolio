import Image from "next/image";
import { Quintessential } from "next/font/google";

const quintessential = Quintessential({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="w-full">
      <section
        className="hero-section flex min-h-[100svh] w-full items-center justify-center px-4 overflow-x-hidden"
        style={{
          backgroundImage: "url('/images/drafting-board.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100svh",
          backgroundColor: "#2A2A2A",
        }}
      >
        <h1
          className={`${quintessential.className} hero-name w-full text-center select-none text-[clamp(4rem,16vw,18rem)]`}
          style={{
            color: "#C0C0C0",
            transform: "rotate(-2deg)",
          }}
        >
          <span className="relative inline-block">
            Nemi Sanghvi
            <svg
              aria-hidden="true"
              viewBox="0 0 600 44"
              fill="#D5851F"
              className="absolute left-0 w-full overflow-visible"
              style={{ top: "88%", height: "auto" }}
            >
              <path d="M0 24 C 120 10, 320 6, 572 13 C 590 14, 596 22, 574 24 C 420 20, 220 20, 0 24 Z" />
              <path d="M96 28 C 88 28, 84 32, 96 33 C 200 31, 330 32, 480 35 C 350 28, 220 26, 96 28 Z" />
            </svg>
          </span>
        </h1>
      </section>
    </main>
  );
}
