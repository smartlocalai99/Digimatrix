export default function Footer({ logoSrc }) {
  const columns = [
    {
      title: "Solutions",
      links: ["Cloud Solutions", "Cyber Security", "Datacenter Solutions", "Managed IT Services", "Networking Solutions", "Backup & DR"],
    },
    {
      title: "Industries",
      links: ["Healthcare", "Education", "Government", "Manufacturing", "Retail", "Finance"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact Us"],
    },
    {
      title: "Support",
      links: ["Support Center", "Documentation", "FAQs", "Policies"],
    },
  ];

  return (
    <footer className="w-full" style={{ background: "#050d1a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="w-full" style={{ padding: "60px 40px 30px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {logoSrc ? (
                <img src={logoSrc} alt="DgITmatrix" style={{ width: 36, height: 36, objectFit: "contain" }} />
              ) : (
                <div style={{ width: 36, height: 36 }} />
              )}
              <div>
                <p className="font-semibold tracking-wider text-[14px] text-white leading-none">DgITmatrix</p>
                <p className="uppercase tracking-[0.2em] text-[7px] text-[#556] mt-0.5">Private Limited</p>
              </div>
            </div>
            <p className="text-[13px] text-[#556677] leading-relaxed mb-6" style={{ maxWidth: "280px" }}>
              Delivering innovative IT solutions that empower businesses to thrive in a digital world.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {["linkedin", "twitter", "facebook", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center no-underline"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-[10px] text-[#667] uppercase font-bold">
                    {social[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[#556677] no-underline block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="rounded-xl mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            padding: "24px",
          }}
        >
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-1">Newsletter</h4>
            <p className="text-[12px] text-[#556677]">Subscribe to get the latest updates and insights.</p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg text-[13px] text-white placeholder-[#446] outline-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "10px 16px",
                width: "220px",
              }}
            />
            <button
              className="bg-[#e8741e] text-white text-[11px] font-semibold uppercase tracking-wide rounded-lg cursor-pointer border-none"
              style={{ padding: "10px 20px" }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-[11px] text-[#445566]">
            © 2024 DgITmatrix Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] text-[#445566] no-underline">Privacy Policy</a>
            <a href="#" className="text-[11px] text-[#445566] no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
