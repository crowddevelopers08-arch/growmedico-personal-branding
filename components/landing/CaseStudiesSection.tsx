import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag } from "./shared";

const featuredCaseStudies = [
  {
    client: "Client 1",
    name: "Dr. Priyanka Reddy",
    role: "Dermatologist",
    metrics: [
      "1.3 Million Followers (Verified): Instagram",
      "723K Subscribers | 705 Videos: YouTube",
      "DNA Skin Clinics: Founder",
    ],
    details: [
      "Skincare education, ingredient breakdowns, treatment demos: Content Style",
      "Became one of India's most recognized: Result dermatologist online",
    ],
  },
  {
    client: "Client 2",
    name: "Dr. Rohit Sane",
    role: "Family Doctor",
    metrics: [
      "Instagram: 186K Followers",
      "YouTube: Active presence with health & nutrition content",
      "Founder: Madhavbaug | 1 Million+ Heart Patients Treated",
    ],
    details: [
      "Content Style: Diet tips, heart health, holistic wellness",
      "Result: Built massive trust-based following through consistent video content",
    ],
  },
];

const moreCaseStudies = [
  {
    client: "Client 3",
    name: "Dr. Saravanan N",
    role: "Holistic Healthcare",
    metrics: [
      "34.6K Followers: Instagram",
      "18+ years in holistic healthcare: Experience",
      "Priyam Clinic: Founder",
      "50,000+ lives transformed",
    ],
    details: [
      "Thyroid, nutrition, lifestyle medicine: Content Style",
      "Consistent content turned a local: Result practice into a regional brand",
    ],
  },
  {
    client: "Client 4",
    name: "Dr. Ramesh Varier R",
    role: "Holistic Healthcare",
    metrics: [
      "Instagram: 18.1K Followers",
      "YouTube: 11.3K Subscribers | Shorts getting 100K-747K views",
      "Experience: 35+ years in holistic healthcare",
      "50,000+ lives transformed",
    ],
    details: [
      "Content Style: Diet tips, natural remedies, wellness education",
      "Result: YouTube Shorts strategy drove massive organic reach",
    ],
  },
];

function CaseStudyCard({
  item,
  accent,
}: {
  item: (typeof featuredCaseStudies)[number] | (typeof moreCaseStudies)[number];
  accent: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[rgba(51,189,176,0.14)] bg-[#141c1a] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.24)] md:p-7">
      <div className={`pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full ${accent}`} />
      <div className="relative z-10">
        <div className="inline-flex rounded-full border border-[rgba(51,189,176,0.22)] bg-[rgba(51,189,176,0.12)] px-3 py-1 text-[0.82rem] font-black uppercase tracking-[0.08em] text-[#33bdb0]">
          {item.client}
        </div>

        <div className="mt-5 border-b border-[rgba(255,255,255,0.06)] pb-5">
          <h3 className="font-[var(--font-fraunces)] text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[#f0faf9] md:text-[1.9rem]">
            {item.name}
          </h3>
          <p className="mt-2 text-[1rem] font-bold uppercase tracking-[0.06em] text-[#8eaea9] md:text-[1.04rem]">
            {item.role}
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {item.metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[#1a2422] px-4 py-3 text-[1rem] font-bold leading-[1.65] text-[#d7ebe7]"
            >
              {metric}
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {item.details.map((detail) => (
            <div key={detail} className="flex gap-3 text-[1rem] font-semibold leading-[1.75] text-[#8eaea9]">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#33bdb0]" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="bg-[#080c0b] px-5 py-16 max-[470px]:py-6 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>Case Studies: Real Results, Real Doctors</SectionTag>
        <SectionHeading
          title={
            <>
              We Don't Just Promise Results.
              <br />
              <em>We Deliver Them.</em>
            </>
          }
        />

        <div className="mt-12 grid gap-6 md:mt-14 max-[470px]:mt-8 lg:grid-cols-2">
          {featuredCaseStudies.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <CaseStudyCard
                item={item}
                accent={index === 0 ? "bg-[radial-gradient(circle,rgba(51,189,176,0.14)_0%,transparent_68%)]" : "bg-[radial-gradient(circle,rgba(240,250,249,0.08)_0%,transparent_68%)]"}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 max-[470px]:mt-8 md:mt-16">
          <SectionTag>More Client Wins</SectionTag>
          <SectionHeading
            title={
              <>
                From local doctors
                <br />
                to <em>recognized brands.</em>
              </>
            }
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {moreCaseStudies.map((item, index) => (
              <Reveal key={item.name} delay={index * 100}>
                <CaseStudyCard
                  item={item}
                  accent={index === 0 ? "bg-[radial-gradient(circle,rgba(51,189,176,0.1)_0%,transparent_68%)]" : "bg-[radial-gradient(circle,rgba(107,138,134,0.12)_0%,transparent_68%)]"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
