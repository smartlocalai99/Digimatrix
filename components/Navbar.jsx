import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ logoSrc }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { label: "Home", href: "#" },
    {
      label: "Solutions",
      href: "#solutions",
      dropdown: ["Cloud Solutions", "Cyber Security", "Datacenter Solutions", "Managed IT Services", "Networking Solutions", "Backup & DR"],
    },
    { label: "Industries", href: "#industries" },
    { label: "Products", href: "#products" },
    {
      label: "Resources",
      href: "#resources",
      dropdown: ["Case Studies", "Whitepapers", "Blog", "Documentation"],
    },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[200]" style={{ background: "rgba(7,17,31,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="w-full flex items-center justify-between" style={{ padding: "16px 40px" }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          {logoSrc ? (
            <img src={logoSrc} alt="DgITmatrix" style={{ width: 40, height: 40, objectFit: "contain" }} />
          ) : (
            <div style={{ width: 40, height: 40 }} />
          )}
          <div>
            <p className="font-semibold tracking-wider text-[15px] text-white leading-none">DgITmatrix</p>
            <p className="uppercase tracking-[0.2em] text-[7px] text-[#777] mt-0.5">Private Limited</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 text-[12px] font-medium tracking-[0.12em] uppercase no-underline"
                style={{ color: item.label === "Home" ? "#fff" : "#a0a8b4" }}
              >
                {item.label}
                {item.dropdown && (
                  <svg className="w-3 h-3 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              {item.label === "Home" && (
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#e8741e] rounded-full" />
              )}
              {/* Dropdown */}
              {item.dropdown && openDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-2 py-2 rounded-lg min-w-[200px]"
                  style={{ background: "rgba(12,26,46,0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="block px-4 py-2.5 text-[12px] tracking-wide text-[#a0a8b4] no-underline"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#e8741e] text-white text-[11px] font-semibold uppercase tracking-[0.12em] no-underline rounded"
            style={{ padding: "10px 22px" }}
          >
            Get Consultation
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "rgba(7,17,31,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="py-4" style={{ padding: "16px 40px" }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-[13px] font-medium tracking-[0.1em] uppercase text-[#a0a8b4] no-underline"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#e8741e] text-white text-[11px] font-semibold uppercase tracking-[0.12em] no-underline rounded mt-4"
                style={{ padding: "10px 22px" }}
                onClick={() => setMobileOpen(false)}
              >
                Get Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
