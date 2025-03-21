'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BannerImage {
  src: string
  alt: string
  href?: string
}

interface Props {
  images?: BannerImage[]
  autoplayInterval?: number
}

const defaultImages: BannerImage[] = [
  { src: '/images/banner/11.png', alt: 'Banner 1' },
  { src: '/images/banner/12.png', alt: 'Banner 2' },
  { src: '/images/banner/13.png', alt: 'Banner 3' },
  { src: '/images/banner/14.png', alt: 'Banner 1' },
  { src: '/images/banner/17.png', alt: 'Banner 2' },
  { src: '/images/banner/18.png', alt: 'Banner 3' },
]

const  Banner = ({ 
  images = defaultImages,
  autoplayInterval = 5000 
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoplayInterval)

    return () => clearInterval(timer)
  }, [images.length, autoplayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative w-full">
      {/* Banner Container with min-height for mobile */}
      <div className="relative w-full min-h-[200px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Updated positioning for rounded corners */}
      <button
        onClick={previousSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation - Adjusted bottom spacing */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
export default Banner;