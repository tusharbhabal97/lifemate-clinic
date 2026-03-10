export default function AppointmentStrip() {
  return (
    <div id="appointment" className="relative z-10 mx-auto mt-12 w-full max-w-[1320px] px-5 pb-8 lg:px-6">
      <div className="rounded-[30px] border-2 border-[#9ed9fa] bg-[#f3f8fc] px-10 pb-10 pt-9 shadow-[0_24px_40px_rgba(0,0,0,0.05)]">
        <h2 className="text-[52px] font-bold leading-none text-[#0069ab]">Book your consultation in 3 simple steps.</h2>

        <div className="mt-8 grid grid-cols-[1fr_1fr_1fr_220px] items-end gap-5">
          <label className="grid gap-3">
            <span className="text-[17px] font-medium text-[#888888]">✉ Email Address</span>
            <input type="email" placeholder="Enter your email address" className="h-[64px] rounded-2xl border border-[#d1d1d1] bg-white px-5 text-[16px] text-[#4f4f4f] placeholder:text-[#d1d1d1]" />
          </label>
          <label className="grid gap-3">
            <span className="text-[17px] font-medium text-[#888888]">📞 Contact Number</span>
            <input type="tel" placeholder="Enter your contact number" className="h-[64px] rounded-2xl border border-[#d1d1d1] bg-white px-5 text-[16px] text-[#4f4f4f] placeholder:text-[#d1d1d1]" />
          </label>
          <label className="grid gap-3">
            <span className="text-[17px] font-medium text-[#888888]">📅 Date of Appointment</span>
            <input type="text" placeholder="Select preferred date" className="h-[64px] rounded-2xl border border-[#d1d1d1] bg-white px-5 text-[16px] text-[#4f4f4f] placeholder:text-[#d1d1d1]" />
          </label>
          <button className="h-[64px] rounded-2xl bg-gradient-to-r from-[#2cbeff] to-[#00a4f4] px-6 text-[18px] font-semibold text-white">Request Callback ✓</button>
        </div>
      </div>
    </div>
  );
}
