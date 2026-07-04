import { ADDRESS, COMPANY_NAME, EMAIL, FULL_ADDRESS, GEO, PRIMARY_PHONE, SITE_URL } from './site'

const sameAs = []

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    alternateName: 'DgITmatrix',
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo.png`,
    email: EMAIL,
    telephone: `+91${PRIMARY_PHONE}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
      addressLocality: 'Kadapa',
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    sameAs,
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    image: `${SITE_URL}/logos/logo.png`,
    url: SITE_URL,
    telephone: `+91${PRIMARY_PHONE}`,
    email: EMAIL,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
      addressLocality: 'Kadapa',
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    areaServed: [
      'Kadapa', 'Cuddapah', 'Proddatur', 'Rayachoti', 'Pulivendula',
      'Rajampet', 'Mydukur', 'Badvel', 'Kamalapuram', 'Railway Kodur',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:00',
    },
    description: `${COMPANY_NAME} provides CCTV installation, printer maintenance, laptop and desktop repair, networking, office IT AMC, and cloud maintenance for homes, offices, schools, hospitals and businesses in Kadapa, Andhra Pradesh.`,
  }
}

export function serviceSchema({ name, description, url, areaServed = 'Kadapa, Andhra Pradesh' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { '@type': 'LocalBusiness', name: COMPANY_NAME, telephone: `+91${PRIMARY_PHONE}`, address: FULL_ADDRESS },
    areaServed,
  }
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }
}

export function courseSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { '@type': 'Organization', name: COMPANY_NAME, sameAs: SITE_URL },
  }
}
