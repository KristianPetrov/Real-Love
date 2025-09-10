import { ReactNode } from "react";

type SectionBoxProps = {
  id?: string;
  title?: string;
  className?: string;
  children: ReactNode;
};

export default function SectionBox({ id, title, className, children }: SectionBoxProps) {
  return (
    <section id={id} className={className ? className : undefined}>
      <div className="relative w-full">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-3xl bg-red-500/30 blur-2xl candle-flicker"
        />
        <div className="rounded-2xl border border-red-500/20 bg-white/[.02] p-6 sm:p-8 shadow-lg backdrop-blur">
          {title ? (
            <h2 className="old-english-heading text-3xl sm:text-4xl mb-4">{title}</h2>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}


