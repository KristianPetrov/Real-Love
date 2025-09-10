"use client";
import { useState } from "react";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Core Mission", href: "#core-mission" },
  { name: "Pillars of Love", href: "#pillars" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/5 border-b border-red-500/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#top" className="text-lg font-semibold tracking-tight">Real Love</a>
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 active:scale-[.98] transition"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-red-500/40 text-red-200 hover:bg-red-600/10"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-red-400"></span>
              <span className="block w-6 h-0.5 bg-red-400"></span>
              <span className="block w-6 h-0.5 bg-red-400"></span>
            </div>
          </button>
        </div>
      </div>
      {open ? (
        <div className="md:hidden border-t border-red-500/20 bg-black/40">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}


