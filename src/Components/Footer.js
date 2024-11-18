import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-9  md:bottom-0 w-full text-center py-4 bg-blue-300">
      <p className="text-sm">&copy; {new Date().getFullYear()} Weather </p>
    </footer>
  );
}
