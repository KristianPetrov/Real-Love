import SectionBox from "@/components/SectionBox";

export default function ContactSection() {
  return (
    <SectionBox id="contact" title="Contact" className="mt-12">
      <ul className="text-base sm:text-lg leading-relaxed flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        <li className="flex items-center gap-3">
          <svg
            className="w-7 h-7 text-red-500 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 2h4l1 5-3 2c1.5 3.5 4 6 7.5 7.5l2-3 5 1v4c0 1.1-.9 2-2 2C9.6 21 3 14.4 3 3c0-1.1.9-2 2-2z" />
          </svg>
          <a className="text-red-400 hover:underline" href="tel:+18053389677">(805)338-9677</a>
        </li>
        <li className="flex items-center gap-3">
          <svg
            className="w-7 h-7 text-foreground flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          <a className="text-red-400 hover:underline" href="mailto:Ellis.ryanlee@gmail.com">Ellis.ryanlee@gmail.com</a>
        </li>
        <li className="flex items-center gap-3">
          <svg
            className="w-7 h-7 text-foreground flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          <a className="text-red-400 hover:underline" href="https://instagram.com/ryanellis" target="_blank" rel="noopener noreferrer">@ryanellis</a>
        </li>
      </ul>
    </SectionBox>
  );
}


