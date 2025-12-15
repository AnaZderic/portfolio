"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[rgb(var(--background))] border-b border-[rgb(var(--border))] shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link href="/">
          <span className="text-xl font-heading font-bold tracking-tight text-[rgb(var(--foreground))]">
            Ana Zderic
            {isAdmin && (
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary))]">
                Admin
              </span>
            )}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {!isAdmin && navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[rgb(var(--primary))] transition font-semibold"
            >
              {link.name}
            </Link>
          ))}

          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          {!isAdmin && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[rgb(var(--foreground))] text-xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>
      </div>

      {isOpen && !isAdmin && (
        <div className="md:hidden bg-[rgb(var(--background))] border-t border-[rgb(var(--border))]">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary))] font-semibold transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
