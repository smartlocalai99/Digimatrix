import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: '/images/server-room.jpg', alt: 'Enterprise IT management and server infrastructure' },
  { src: '/images/computer-repair-hero-2.jpg', alt: 'Technician assembling and upgrading a desktop computer' },
  { src: '/images/printer-service-hero.jpg', alt: 'Technician servicing and maintaining an office printer' },
]

export default function HeroImageSlideshow() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setActive(value => (value + 1) % slides.length), 5000)
    return () => window.clearInterval(timer)
  }, [])
  const move = direction => setActive(value => (value + direction + slides.length) % slides.length)

  return <div className="hero-image hero-slideshow">
    <div className="hero-slide-track" style={{ transform: `translateX(-${active * 100}%)` }}>
      {slides.map((slide,index)=><div className="hero-slide" key={slide.src}><Image src={slide.src} alt={slide.alt} fill priority={index===0} sizes="(max-width: 800px) 100vw, 45vw"/></div>)}
    </div>
    <div className="hero-slide-controls">
      <button type="button" onClick={()=>move(-1)} aria-label="Previous hero image"><ChevronLeft/></button>
      <div>{slides.map((slide,index)=><button type="button" key={slide.src} className={index===active?'active':''} onClick={()=>setActive(index)} aria-label={`Show hero image ${index+1}`}></button>)}</div>
      <button type="button" onClick={()=>move(1)} aria-label="Next hero image"><ChevronRight/></button>
    </div>
  </div>
}
