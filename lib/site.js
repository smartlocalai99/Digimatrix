// Central site configuration — company facts, contact numbers, and constants
// used across SEO metadata, schema.org markup, and WhatsApp enquiry links.

export const WHATSAPP_NUMBER = '9989998689'

export const PRIMARY_PHONE = '9989998689'
export const LANDLINE = '08562-488988'

export const SITE_URL = 'https://www.dgitmatrix.com'
export const COMPANY_NAME = 'DgITmatrix Private Limited'
export const COMPANY_SHORT = 'DgITmatrix'
export const EMAIL = 'support@dgitmatrix.com'

export const ADDRESS = {
  line1: 'House No 20/976, Police Quarters Road',
  line2: 'Cooperative Colony',
  city: 'Kadapa (Cuddapah)',
  region: 'Andhra Pradesh',
  postalCode: '516001',
  country: 'IN',
}

export const FULL_ADDRESS = `${ADDRESS.line1}, ${ADDRESS.line2}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`

export const GEO = { lat: 14.4673, lng: 78.8242 }

export const CREDENTIALS = {
  cin: 'U62090AP2025PTC123001',
  incorporated: '23/12/2025',
  isoStandard: 'ISO 9001:2015',
  isoScope: 'IT Infrastructure Management and Support Services',
  isoCertNo: 'QRS/26QM232J',
  startupIndiaCert: 'DIPP241778',
  gstin: '37AAMCD2873P1ZU',
  udyam: 'UDYAM-AP-05-0106055',
}

export const SERVICE_AREAS = [
  'Kadapa', 'Cuddapah', 'YSR Kadapa', 'Proddatur', 'Rayachoti',
  'Pulivendula', 'Rajampet', 'Mydukur', 'Badvel', 'Kamalapuram', 'Railway Kodur',
]

export function whatsappLink(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/91${number}?text=${encodeURIComponent(message)}`
}

export function telLink(number = PRIMARY_PHONE) {
  return `tel:+91${number}`
}
