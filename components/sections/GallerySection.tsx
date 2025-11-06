import GalleryCarousel from '@/components/ui/GalleryCarousel'
import { galleryImages } from '@/lib/constants'

export default function GallerySection() {
  return (
    <section className="py-16" id="gallery">
      <h3 className="text-3xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        Photo Gallery
      </h3>
      <GalleryCarousel images={galleryImages} />
    </section>
  )
}
