import Portfolio from "@/components/Portfolio/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Fahim - Portfolio",
  description:
    "Portfolio of Mohamed Fahim, a Front-End Developer focused on React, Next.js, TypeScript, and high-performance web experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function Home() {
  return <Portfolio />;
}
