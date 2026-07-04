import { useEffect, useRef, useState } from 'react'

export default function LogoIntro() {
  const [visible, setVisible] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const hide = window.setTimeout(() => setVisible(false), 0)
      return () => window.clearTimeout(hide)
    }
    const timeout = window.setTimeout(() => setVisible(false), 4000)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return <div className="logo-intro" role="presentation" onClick={() => setVisible(false)}>
    <video
      ref={videoRef}
      src="/logo.mp4"
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedMetadata={() => { if (videoRef.current) videoRef.current.playbackRate = 2 }}
      onError={() => setVisible(false)}
    />
    <button type="button" onClick={() => setVisible(false)} aria-label="Skip introduction">Skip</button>
  </div>
}
