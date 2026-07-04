const TOPICS = [
  'CCTV Installation', 'Printer Maintenance', 'Laptop & Desktop Repair', 'Networking & Wi-Fi',
  'Office IT AMC', 'Cloud Maintenance', 'Managed IT Services', 'Hardware Training',
]

function Group() {
  return (
    <div className="flex shrink-0 items-center">
      {TOPICS.map((t) => (
        <span key={t} className="flex items-center gap-6 py-4 pl-6 text-[13px] font-extrabold uppercase tracking-[0.08em] text-white sm:gap-10 sm:pl-10">
          {t}
          <span className="text-cyan">&#10022;</span>
        </span>
      ))}
    </div>
  )
}

export default function TopicMarquee() {
  return (
    <div className="overflow-hidden border-b-4 border-cyan bg-navy-2">
      <div className="kd-marquee">
        <Group />
        <Group aria-hidden="true" />
      </div>
    </div>
  )
}
