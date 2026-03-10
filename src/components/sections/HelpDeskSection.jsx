import { clinicInfo } from "../../data/clinicInfo";

export default function HelpDeskSection() {
  return (
    <section id="contact" className="bg-[#edf3f7] py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[56px] font-bold text-[#3d3d3d]">Reach our <span className="text-[#2cbeff]">Help Desk</span> for support</h3>
        <p className="mt-6 text-center text-[16px] leading-8 text-[#b0b0b0]">Call {clinicInfo.phonePrimary} or submit your details for appointment assistance from {clinicInfo.name}.</p>

        <div className="mx-auto mt-10 grid max-w-[1260px] grid-cols-[1fr_1fr_1fr_260px] gap-5">
          <input type="text" placeholder="Enter Your First Name" className="h-[64px] rounded-2xl border-2 border-[#75d4ff] bg-[#f3f8fc] px-5 text-[18px] text-[#4f4f4f] placeholder:text-[#b0b0b0]" />
          <input type="tel" placeholder="Enter Your Phone Number" className="h-[64px] rounded-2xl border-2 border-[#75d4ff] bg-[#f3f8fc] px-5 text-[18px] text-[#4f4f4f] placeholder:text-[#b0b0b0]" />
          <input type="email" placeholder="Enter Your Email Address" className="h-[64px] rounded-2xl border-2 border-[#75d4ff] bg-[#f3f8fc] px-5 text-[18px] text-[#4f4f4f] placeholder:text-[#b0b0b0]" />
          <button className="h-[64px] rounded-2xl bg-gradient-to-r from-[#2cbeff] to-[#00a4f4] text-[22px] font-semibold text-white">Request support ➜</button>
        </div>
      </div>
    </section>
  );
}
