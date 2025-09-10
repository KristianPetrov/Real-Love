import Image, { ImageProps } from "next/image";
import { ComponentProps } from "react";

type CandleImageProps = Omit<ImageProps, "src"> & {
  src: string;
  glowClassName?: string;
};

export default function CandleImage({ src, glowClassName, className, ...rest }: CandleImageProps) {
  return (
    <div className="relative inline-block">
      <div
        aria-hidden
        className={
          "absolute inset-0 -z-10 rounded-full bg-red-500/25 blur-2xl candle-flicker " +
          (glowClassName ? glowClassName : "")
        }
      />
      <Image src={src} className={className} {...rest} />
    </div>
  );
}


