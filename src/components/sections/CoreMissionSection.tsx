import SectionBox from "@/components/SectionBox";

export default function CoreMissionSection() {
  return (
    <SectionBox id="core-mission" title="Core Mission" className="mt-12">
      <ul className="mt-2 list-disc pl-6 space-y-3 text-base sm:text-lg leading-relaxed">
        <li>
          <span className="font-medium">Community Outreach:</span> Meeting people where they are—on the
          streets, in schools, in rehabs, and in churches—to bring tangible support and encouragement.
        </li>
        <li>
          <span className="font-medium">Artist Development:</span> Giving independent creatives resources,
          mentorship, and platforms to thrive without being swallowed by an exploitative system.
        </li>
        <li>
          <span className="font-medium">Family Support:</span> Helping families in need, from those facing
          rare hardships to those just trying to get back on their feet.
        </li>
        <li>
          <span className="font-medium">Spiritual Renewal:</span> Hosting nights of worship, storytelling,
          and connection that break down walls and invite people into authentic encounters.
        </li>
      </ul>
    </SectionBox>
  );
}


