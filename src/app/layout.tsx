import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nemi Sanghvi — Full Stack Developer",
  description:
    "Portfolio of Nemi Sanghvi. Full Stack developer building things for the web with care, precision and a bit of personality.",
  keywords: ["Full Stack developer", "React", "Next.js", "TypeScript", "portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body
        className="antialiased"
        style={{ backgroundColor: "#2A2A2A", color: "#C0C0C0" }}
      >
        {children}
      </body>
    </html>
  );
}
