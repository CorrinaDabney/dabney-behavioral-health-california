
"use client"

import { useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause } from 'lucide-react'
import Link from 'next/link'

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/waterfall-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

          {/* Left Panel — Educational & Diagnostic */}
          <div className="bg-white/90 rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Educational &amp; Diagnostic Evaluations</h2>
            <p className="text-sm text-green-700 font-medium mb-4">PsyD/Ph.D., LEP, &amp; clinical associates</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Psycho-educational evaluation</li>
              <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Psychological educational assessment</li>
              <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Independent Educational Evaluation (IEE)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Autism spectrum diagnostic assessment</li>
            </ul>
          </div>

          {/* Center — Title & Buttons */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Dabney Behavioral Health California
            </h1>
            <p className="text-xl text-green-100 drop-shadow">
              Compassionate, inclusive mental health care tailored to your unique journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/schedule">
                  New Patient Forms
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg"
                asChild
              >
                <Link href="/clinical-services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Panel — Therapy & Specialist */}
          <div className="bg-white/90 rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Therapy &amp; Specialist Services</h2>
            <p className="text-sm text-green-700 font-medium mb-4">LMFT, LCSW, &amp; clinical associates</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Adult autism specialist services</li>
              <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Trauma-focused care</li>
              <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Family &amp; adoptive family therapy</li>
              <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>ADHD coaching for children &amp; teens</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Video Controls */}
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Toggle video playback"
      >
        <Play className="w-5 h-5" />
      </button>
    </section>
  )
}
