import { ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export const credentialBadges = [
  { logo: '/logos/iso-31.svg', logoWidth: 54, logoHeight: 50, code: 'ISO 9001:2015', label: 'Quality Management' },
  { logo: '/logos/startup-india.png', logoWidth: 92, logoHeight: 34, code: 'Startup India', label: 'DPIIT Recognized' },
  { logo: '/logos/msme.svg', logoWidth: 56, logoHeight: 50, code: 'Udyam', label: 'MSME Registered' },
  { logo: '/logos/india-emblem-white.svg', logoWidth: 33, logoHeight: 48, gst: true, code: 'GST', label: 'Registered Business' },
]

export function Seal({ icon, logo, logoWidth, logoHeight, gst, code, label, size = 'md', light = false, stack = false }) {
  return (
    <div className={`seal seal-${size} ${logo ? 'seal-official' : ''} ${light ? 'seal-light' : ''} ${stack ? 'seal-stack' : ''}`}>
      {logo ? <div className={`seal-logo-box ${gst ? 'gst-logo' : ''}`}><Image src={logo} width={logoWidth} height={logoHeight} alt=""/>{gst&&<b>GST</b>}</div> : <div className="seal-ring"><div className="seal-inner">{icon}</div></div>}
      <div className="seal-text"><b>{code}</b><small>{label}</small></div>
    </div>
  )
}

export function SealRow({ items = credentialBadges, size, light = false, stack = false, className = '' }) {
  return <div className={`seal-row ${className}`}>{items.map(x => <Seal key={x.code} {...x} size={size} light={light} stack={stack}/>)}</div>
}

export function HeroBadge() {
  return (
    <div className="hero-badge">
      <div className="hero-iso-mark"><Image src="/logos/iso-31.svg" width={34} height={32} alt=""/></div>
      <div><b>ISO 9001:2015</b><small>Certified Company</small></div>
    </div>
  )
}

export function MicrosoftMark() {
  return (
    <svg viewBox="0 0 23 23" className="ms-mark" aria-hidden="true">
      <rect x="1" y="1" width="10" height="10" fill="#f35325"/>
      <rect x="12" y="1" width="10" height="10" fill="#81bc06"/>
      <rect x="1" y="12" width="10" height="10" fill="#05a6f0"/>
      <rect x="12" y="12" width="10" height="10" fill="#ffba08"/>
    </svg>
  )
}
