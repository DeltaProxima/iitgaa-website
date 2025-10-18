import Image from 'next/image'
import { GalleryImage } from '@/lib/types'

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id}>
          <Image
            alt={image.alt}
            className="w-full h-64 object-cover rounded-lg"
            src={image.src}
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  )
}