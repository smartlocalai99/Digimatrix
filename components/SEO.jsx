import Head from 'next/head'
import { SITE_URL } from '@/lib/site'

export default function SEO({ title, description, path = '', image = '/logos/logo.png' }) {
  const fullTitle = title.includes('DgITmatrix') ? title : `${title} | DgITmatrix`
  const canonical = `${SITE_URL}${path}`
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="geo.placename" content="Kadapa, Andhra Pradesh" />
      <meta name="geo.region" content="IN-AP" />
    </Head>
  )
}
