import Portfolio from "@/components/Portfolio/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Fahim - Portfolio",
  description:
    "Portfolio By Mohamed Fahim - Frontend Developer and Node.js Developer",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function Home() {
  return <Portfolio />;
}
