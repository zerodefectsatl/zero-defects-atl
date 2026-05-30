import MorphLogo from '@/components/MorphLogo'

/**
 * Gridlocked scroll-tile shell (363 model): a contained tile floats centered
 * on the field; the page does not scroll — content scrolls inside the tile.
 * Pass page content as children (they scroll inside); the page controls its
 * own inner padding and includes a <Footer/> at the end of the children.
 */
export default function TilePage({ jsonLd, children }) {
  return (
    <main className="tile-page">
      <MorphLogo />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <div className="tile-lock">
        <section className="tile tile-scroll" style={{ padding: 0 }}>
          {children}
        </section>
      </div>
    </main>
  )
}
