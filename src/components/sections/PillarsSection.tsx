import SectionBox from "@/components/SectionBox";
import CandleImage from "@/components/CandleImage";

export default function PillarsSection() {
  return (
    <SectionBox id="pillars" title="Pillars of Real Love" className="mt-12">
      <div className="mb-6 flex justify-center">
        <CandleImage
          src="/real-love-pillars.png"
          alt="Pillars of Real Love"
          width={1200}
          height={675}
          className="w-full max-w-3xl h-auto rounded-xl"
        />
      </div>

      <ol className="list-decimal pl-6 space-y-3 text-base sm:text-lg leading-relaxed">
        <li>
          <span className="font-medium">Real Love Nights:</span> Gatherings that blend music, testimony, and
          community—spaces where people feel seen, heard, and supported.
        </li>
        <li>
          <span className="font-medium">Creative Spaces:</span> A hub where artists can write, create,
          collaborate, and rest. This includes retreat homes, songwriter houses, and community studios.
        </li>
        <li>
          <span className="font-medium">Family & Outreach Initiatives:</span> Programs that directly impact
          families, veterans, kids with dreams, and individuals facing homelessness or addiction.
        </li>
        <li>
          <span className="font-medium">Cultural Reform in Christian Spaces:</span> Challenging the industry
          and church culture to return to authenticity, away from performance and profit-driven models.
        </li>
      </ol>
    </SectionBox>
  );
}


