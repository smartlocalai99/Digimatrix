import { siCisco, siDell, siEpson, siFortinet, siHp, siLenovo, siVeeam } from 'simple-icons'
import { MicrosoftMark } from './Badges'

const icons = { Dell: siDell, HP: siHp, Lenovo: siLenovo, Cisco: siCisco, Fortinet: siFortinet, Veeam: siVeeam, Epson: siEpson }

export default function VendorLogo({ name }) {
  if (name === 'Microsoft') return <span className="vendor-logo microsoft-logo"><MicrosoftMark/><strong>Microsoft</strong></span>
  const icon = icons[name]
  return <span className="vendor-logo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path}/></svg><strong>{name}</strong></span>
}
