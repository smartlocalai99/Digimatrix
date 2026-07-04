export default function SchemaJsonLd({ schema }) {
  const list = Array.isArray(schema) ? schema : [schema]
  return (
    <>
      {list.filter(Boolean).map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...item }) }}
        />
      ))}
    </>
  )
}
