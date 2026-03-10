export default function HowItWorksSection() {
  const steps = [
    {
      title: "Share Your Symptoms",
      text: "Tell us about your concerns, reports, and medical history so the consultation can focus on your exact cardiac risk profile.",
    },
    {
      title: "Get Expert Evaluation",
      text: "Consult with Dr. Swapnil Mate for a targeted assessment, diagnosis plan, and next-step investigations when required.",
    },
    {
      title: "Start Structured Care",
      text: "Receive a personalized treatment and follow-up roadmap for blood pressure, cholesterol, diabetes-linked risk, and lifestyle goals.",
    },
  ];

  return (
    <section className="bg-[#edf3f7] py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[56px] font-bold text-[#3d3d3d]">How <span className="text-[#2cbeff]">our care process</span> works</h3>
        <p className="mx-auto mt-6 max-w-[900px] text-center text-[16px] leading-8 text-[#888888]">From first consultation to follow-up, Lifemate Clinic follows a structured clinical process to keep treatment clear, measurable, and patient-focused.</p>

        <div className="mt-12 grid grid-cols-[1.06fr_0.94fr] items-end gap-8">
          <div className="grid gap-10">
            {steps.map((step, i) => (
              <div key={step.title} className="grid grid-cols-[56px_1fr] gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#75d4ff] to-[#00a4f4] text-[40px] font-bold text-white">{i + 1}</div>
                <div>
                  <h4 className="text-[52px] font-semibold text-[#3d3d3d]">{step.title}</h4>
                  <p className="mt-2 max-w-[610px] text-[16px] leading-8 text-[#5d5d5d]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="rounded-[30px] border-2 border-[#9ed9fa] bg-[#f3f8fc] p-2">
              <img src="/images/specialist-female.png" alt="Doctor" className="h-[520px] w-full rounded-[22px] object-cover" />
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-2xl border border-[#ececec] bg-white px-7 py-4 text-[16px] font-semibold text-[#0069ab] shadow-[0_10px_24px_rgba(0,0,0,0.08)]">★ Evidence-based Cardiac Care</div>
          </div>
        </div>
      </div>
    </section>
  );
}
