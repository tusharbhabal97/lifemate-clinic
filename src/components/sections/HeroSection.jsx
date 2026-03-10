import { clinicInfo } from "../../data/clinicInfo";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#edf3f7] pt-10">
      <svg
        className="pointer-events-none absolute inset-x-0 top-[330px] hidden h-[520px] w-full lg:block"
        viewBox="0 0 1536 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-40 480C120 300 280 300 470 345C640 385 790 355 940 235C1100 100 1265 130 1576 130"
          stroke="#75D4FF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="13 13"
          opacity="0.75"
        />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] gap-8 px-5 lg:grid-cols-[1.03fr_0.97fr] lg:items-start lg:px-6">
        <div className="pt-10 lg:pt-16">
          <h1 className="max-w-[660px] text-[64px] font-bold leading-[1.06] tracking-[-0.02em] text-[#3d3d3d]">
            Trusted <span className="bg-gradient-to-r from-[#0084d4] to-[#75d4ff] bg-clip-text text-transparent">heart care partner</span>
            <br />
            in Pune.
          </h1>

          <p className="mt-9 max-w-[690px] text-[15px] leading-[1.55] text-[#4f4f4f]">
            <span className="font-semibold text-[#0084d4]">
              Lifemate Clinic on {clinicInfo.area} provides evidence-based cardiac and preventive care.
            </span>{" "}
            Consult with {clinicInfo.doctorName}, {clinicInfo.speciality}, for chest pain evaluation, blood pressure management, cholesterol risk assessment, ECG guidance, and long-term heart health planning. Book your appointment today for focused and compassionate care.
          </p>

          <a
            href="#appointment"
            className="mt-10 inline-flex items-center gap-3 rounded-[16px] bg-gradient-to-r from-[#7fd4ff] to-[#00a4f4] px-10 py-5 text-[17px] font-semibold leading-none text-white shadow-[0_18px_32px_rgba(0,164,244,0.22)] transition hover:brightness-95"
          >
            Book an appointment
            <span aria-hidden="true" className="text-[34px]">›</span>
          </a>
          <p className="mt-5 text-[14px] font-medium text-[#5d5d5d]">
            {clinicInfo.phonePrimary} | {clinicInfo.phoneSecondary}
          </p>
        </div>

        <div className="relative mt-6 flex justify-center lg:mt-0 lg:justify-end">
          <div className="absolute right-[56px] top-[120px] h-[560px] w-[560px] rounded-full bg-gradient-to-b from-[#2cbeff] to-[#75d4ff]" />

          <img src="/images/doctor-hero.png" alt="Doctor" className="relative z-10 mt-[64px] h-[660px] w-auto object-contain" />

          <div className="absolute left-[40px] top-[440px] z-20 flex items-center gap-4 rounded-2xl border border-[#ececec] bg-white px-7 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#eff9ff] text-[#0084d4]">★</span>
            <span className="text-[16px] font-semibold text-[#0069ab]">Same-day Consultation Slots</span>
          </div>

          <div className="absolute bottom-[40px] right-0 z-20 w-[380px] rounded-2xl border border-[#9ed9fa] bg-[#def1ff] px-6 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
            <span className="absolute left-4 top-[-24px] text-[74px] font-bold leading-none text-[#00a4f4]">“</span>
            <p className="text-[16px] leading-relaxed text-[#4f4f4f]">
              \"Clear explanations and practical treatment guidance made my cardiac care journey easier.\"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
