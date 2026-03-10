import { clinicInfo } from "../../data/clinicInfo";

export default function StorySection() {
  return (
    <section id="about" className="bg-[#edf3f7] py-10">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <div className="rounded-[30px] border-2 border-[#9ed9fa] bg-[#f3f8fc] p-10 shadow-[0_16px_30px_rgba(0,0,0,0.05)]">
          <h3 className="text-center text-[56px] font-bold text-[#3d3d3d]">
            <span className="text-[#0084d4]">{clinicInfo.name}'s</span> <span className="text-[#2cbeff]">Story:</span> Get to know us
          </h3>
          <div className="mt-10 grid grid-cols-[0.95fr_1.05fr] gap-10">
            <img src="/images/story-team.png" alt="Medical team" className="h-[430px] w-full rounded-[22px] border-2 border-[#9ed9fa] object-cover" />
            <div className="pt-2">
              <p className="text-[16px] leading-8 text-[#5d5d5d]">
                {clinicInfo.name} is a Pune-based practice focused on personalized and ethical heart care. Led by {clinicInfo.doctorName}, the clinic combines interventional cardiology expertise with preventive care so patients can manage both current symptoms and long-term cardiovascular risk. Our approach prioritizes clear communication, accurate diagnosis, and practical treatment plans.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-[#5d5d5d]">
                Address: {clinicInfo.address}
                <br />
                Email: {clinicInfo.email}
              </p>
              <a href="#contact" className="mt-9 inline-flex rounded-[14px] bg-gradient-to-r from-[#2cbeff] to-[#00a4f4] px-10 py-5 text-[18px] font-semibold leading-none text-white">Contact the clinic</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
