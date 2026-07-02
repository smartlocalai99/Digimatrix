import { useState, useCallback, useEffect, useRef } from "react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Loader, { processLogoNavbar } from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import TechEcosystem from "@/components/TechEcosystem";
import WhyDgITmatrix from "@/components/WhyDgITmatrix";
import Process from "@/components/Process";
import SuccessStories from "@/components/SuccessStories";
import Partners from "@/components/Partners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [logoSrc, setLogoSrc] = useState(null);
  const [isDronePowered, setIsDronePowered] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    if (loaderDone) {
      const timer = setTimeout(() => {
        setIsDronePowered(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setIsDronePowered(false);
    }
  }, [loaderDone]);

  useEffect(() => {
    mountedRef.current = true;
    processLogoNavbar("/logo.png").then((src) => {
      if (mountedRef.current) setLogoSrc(src);
    });
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
  }, []);

  return (
    <>
      <Head>
        <title>DgITmatrix Private Limited — Enterprise Technology Solutions</title>
        <meta
          name="description"
          content="DgITmatrix Private Limited — Cloud, Infrastructure, Cyber Security and Managed IT Solutions for Modern Businesses. Your trusted enterprise technology partner."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/hero-bg.png" as="image" />
      </Head>

      {/* Loader */}
      <AnimatePresence>
        {!loaderDone && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* Main Website */}
      {loaderDone && (
        <div className="w-full">
          {/* Fixed Navbar */}
          <Navbar logoSrc={logoSrc} />

          {/* Section 1: Hero — Deep Navy */}
          <HeroSection isDronePowered={isDronePowered} loaderDone={loaderDone} />

          {/* Section 2: Solutions — Soft Gray */}
          <Solutions />

          {/* Section 3: Industries — Deep Navy */}
          <Industries />

          {/* Section 4: Technology Ecosystem — Soft Gray */}
          <TechEcosystem />

          {/* Section 5: Why DgITmatrix — Deep Navy */}
          <WhyDgITmatrix />

          {/* Section 6: Process — Soft Gray */}
          <Process />

          {/* Section 7: Success Stories — Deep Navy */}
          <SuccessStories />

          {/* Section 8: Partners — Soft Gray */}
          <Partners />

          {/* Section 9: Contact — Deep Navy */}
          <ContactSection />

          {/* Footer */}
          <Footer logoSrc={logoSrc} />
        </div>
      )}
    </>
  );
}
