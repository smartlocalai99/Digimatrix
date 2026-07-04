import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Phone, ArrowUpRight, MapPin, Mail, Clock3 } from 'lucide-react'
import Logo from './Logo'
import { SealRow } from './Badges'
import LogoIntro from './LogoIntro'

const links = [['Enterprise IT','/enterprise-it'],['Services','/services'],['Training','/training'],['Products','/products'],['Industries','/industries'],['About','/about'],['Credentials','/credentials'],['Contact','/contact']]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  return <>
    <LogoIntro />
    <a className="skip" href="#main">Skip to content</a>
    <div className="topbar"><div className="shell"><span><MapPin size={13}/> Kadapa, Andhra Pradesh</span><span className="top-hide">ISO 9001:2015 Certified · 20+ Years Industry Experience</span><a href="mailto:info@dgitmatrix.com"><Mail size={13}/> info@dgitmatrix.com</a></div></div>
    <header className="header">
      <div className="shell nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link className={router.pathname===href?'active':''} href={href} key={href}>{label}</Link>)}</nav>
        <div className="nav-actions"><a className="call-link" href="tel:+919989998689"><Phone size={16}/> Call Now</a><Link className="btn btn-dark btn-sm" href="/contact">Get Support <ArrowUpRight size={16}/></Link></div>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
      {open&&<nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label,href])=><Link href={href} key={href} onClick={()=>setOpen(false)}>{label}</Link>)}<div><a className="btn btn-outline" href="tel:+919989998689">Call Now</a><Link className="btn btn-orange" href="/contact" onClick={()=>setOpen(false)}>Get Support</Link></div></nav>}
    </header>
    <main id="main">{children}</main>
    <footer className="footer">
      <div className="shell footer-top"><div className="footer-intro"><Logo light/><p>Enterprise technology, delivered with local accountability. From the cloud to your office floor in Kadapa.</p></div>
      <div><h3>Solutions</h3><Link href="/enterprise-it">Enterprise IT</Link><Link href="/services">Cloud & Cybersecurity</Link><Link href="/services">Managed Services</Link><Link href="/products">IT Products</Link></div>
      <div><h3>Company</h3><Link href="/about">About us</Link><Link href="/industries">Industries</Link><Link href="/credentials">Credentials</Link><Link href="/training">Training</Link></div>
      <div><h3>Talk to a human</h3><a href="tel:+919989998689"><Phone size={15}/> +91 99899 98689</a><a href="mailto:info@dgitmatrix.com"><Mail size={15}/> info@dgitmatrix.com</a><p><MapPin size={15}/> Kadapa, Andhra Pradesh</p><p><Clock3 size={15}/> Mon–Sat, 9:30–18:30</p></div></div>
      <div className="shell footer-credentials"><p>Verified credentials</p><SealRow size="sm" light className="footer-seals"/></div>
      <div className="shell footer-bottom"><span>© 2026 DgITmatrix Pvt. Ltd. All rights reserved.</span><span>Startup India Recognized · Udyam Registered · GST Registered</span></div>
    </footer>
  </>
}
