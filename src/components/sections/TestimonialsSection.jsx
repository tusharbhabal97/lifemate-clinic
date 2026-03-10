import DotCluster from "../shared/DotCluster";

const testimonials = [
  {
    name: "Patient Feedback",
    text: "Patients appreciate the doctor’s clear explanations and practical guidance for long-term heart health management.",
    image: "/images/testimonial-linda.png",
  },
  {
    name: "Patient Feedback",
    text: "Visitors frequently mention smooth appointment coordination and supportive follow-up communication.",
    image: "/images/testimonial-henry.png",
  },
  {
    name: "Patient Feedback",
    text: "Many families value the calm consultation experience and focused risk-based treatment planning.",
    image: "/images/testimonial-joshua.png",
  },
  {
    name: "Patient Feedback",
    text: "Review highlights often include timely diagnosis support and confidence in preventive cardiology advice.",
    image: "/images/testimonial-samantha.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#edf3f7] py-24">
      <DotCluster className="absolute left-24 top-44" />
      <DotCluster className="absolute right-24 bottom-40" />

      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[56px] font-bold text-[#3d3d3d]"><span className="text-[#0084d4]">Patient Feedback:</span><br />What visitors value at Lifemate Clinic</h3>
        <p className="mt-6 text-center text-[16px] text-[#888888]">Quality care is reflected in patient experience, consistency of follow-up, and trust in treatment planning.</p>

        <div className="mt-12 grid grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <article key={t.name} className="flex items-center gap-5 rounded-[24px] border-2 border-[#75d4ff] bg-[#f3f8fc] px-7 py-8">
              <img src={t.image} alt={t.name} className="h-20 w-20 rounded-xl object-cover" />
              <p className="text-[16px] leading-8 text-[#5d5d5d]">"{t.text}"<br /><span className="font-semibold text-[#3d3d3d]">- {t.name}</span></p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-4 gap-10 text-center">
          {[
            ["Mon-Sat", "09:30 AM - 6:00 PM"],
            ["+91", "84596 12363"],
            ["JM Road", "Deccan Gymkhana, Pune"],
            ["Cardiology", "Consultation & Prevention"],
          ].map(([value, label]) => (
            <div key={value}>
              <p className="text-[64px] font-bold leading-none text-[#0084d4]">{value}</p>
              <p className="mt-2 text-[16px] text-[#5d5d5d]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
