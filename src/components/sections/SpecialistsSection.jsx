import DotCluster from "../shared/DotCluster";

const doctors = [
  {
    name: "Dr. Swapnil Mate (Interventional Cardiologist)",
    desc: "Focused on interventional and preventive cardiology, Dr. Mate works on early diagnosis, risk reduction, and long-term cardiovascular outcomes.",
    image: "/images/specialist-female.png",
  },
  {
    name: "Lifemate Cardiac Care Team",
    desc: "Our clinical support team helps with appointment coordination, diagnostics, follow-up scheduling, and patient education for continuity of care.",
    image: "/images/specialist-male.png",
  },
];

export default function SpecialistsSection() {
  return (
    <section id="doctors" className="relative bg-[#edf3f7] py-20">
      <DotCluster className="absolute left-[270px] top-[330px]" />
      <DotCluster className="absolute right-[260px] bottom-[100px]" />

      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[56px] font-bold text-[#3d3d3d]"><span className="text-[#2cbeff]">Cardiac Specialists:</span><br />Meet our core care team</h3>
        <p className="mx-auto mt-6 max-w-[980px] text-center text-[16px] leading-8 text-[#888888]">Lifemate Clinic combines specialist consultation with a dedicated support team for complete cardiology care in Pune.</p>

        {doctors.map((doctor) => (
          <article key={doctor.name} className="mt-10 grid grid-cols-[360px_1fr] overflow-hidden rounded-[28px] border-2 border-[#75d4ff] bg-gradient-to-r from-[#2cbeff] to-[#0084d4] shadow-[0_16px_30px_rgba(0,0,0,0.08)]">
            <img src={doctor.image} alt={doctor.name} className="h-[380px] w-full object-cover" />
            <div className="p-10 text-white">
              <h4 className="text-[50px] font-semibold leading-tight">{doctor.name}</h4>
              <p className="mt-4 max-w-[700px] text-[16px] leading-8 text-[#eff9ff]">{doctor.desc}</p>
              <button className="mt-8 rounded-2xl bg-white/90 px-7 py-4 text-[18px] font-semibold text-[#0084d4]">Book appointment ☎</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
