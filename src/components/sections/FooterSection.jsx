import { clinicInfo } from "../../data/clinicInfo";

export default function FooterSection() {
  return (
    <footer className="border-t border-[#dbe7ef] bg-[#deeff8] pb-12 pt-16">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-16 w-16">
                <span className="absolute left-0 top-1/2 h-8 w-8 -translate-y-1/2 rounded-l-full bg-[#2cbeff]" />
                <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-r-full bg-[#0084d4]" />
                <span className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-t-full bg-[#00a4f4]" />
                <span className="absolute left-1/2 bottom-0 h-8 w-8 -translate-x-1/2 rounded-b-full bg-[#75d4ff]" />
              </span>
              <span className="text-[42px] font-bold text-[#0069ab]">{clinicInfo.name}</span>
            </div>
            <p className="mt-7 text-[16px] leading-8 text-[#5d5d5d]">
              {clinicInfo.address}
              <br />
              {clinicInfo.phonePrimary} | {clinicInfo.phoneSecondary}
              <br />
              {clinicInfo.email}
            </p>
          </div>

          {[
            ["Support", ["Appointment Booking", "Clinic Timings", "Help Desk", "Reports & Follow-up", "Contact Clinic"]],
            [
              "Services",
              [
                "Cardiology Consultation",
                "Preventive Check-ups",
                "Hypertension Care",
                "ECG & Rhythm Guidance",
                "Cholesterol Management",
              ],
            ],
            ["Information", ["About Clinic", "Doctor Profile", "Location & Directions", "Patient Instructions", "Privacy Notice"]],
          ].map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[17px] font-semibold text-[#0084d4]">{title}</h4>
              <ul className="mt-5 grid gap-3">
                {items.map((item) => (
                  <li key={item} className="text-[16px] text-[#5d5d5d]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-[#9ed9fa] pt-6 text-[16px] text-[#888888]">
          <div className="flex gap-4 text-[28px] text-[#00a4f4]">
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
          <p>{clinicInfo.name} © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
