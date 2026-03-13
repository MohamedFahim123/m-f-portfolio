import Container from "@/components/ui/Container";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gradient-to-t from-black to-gray-800 py-8 px-4">
      <Container className="text-center">
        <p>&copy; 2026 Mohamed Fahim. Built with Next.js & Tailwind CSS</p>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
