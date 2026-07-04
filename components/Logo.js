import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ light = false }) {
  return <Link href="/" className="logo" aria-label="Digital IT Matrix home">
    <span className="brand-image"><Image src="/logos/logo-icon.png" width={48} height={48} alt="" priority/></span>
    <span className={light ? 'text-white' : ''}><b>Digital IT</b> Matrix<small>Enterprise Technology</small></span>
  </Link>
}
