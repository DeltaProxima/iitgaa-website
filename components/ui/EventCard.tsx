import Image from 'next/image'
import Link from 'next/link'
import { Event } from '@/lib/types'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <Image
        alt={event.title}
        className="w-full h-48 object-cover"
        src={event.imageUrl}
        width={400}
        height={192}
      />
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">
          {event.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {event.description}
        </p>
        <Link 
          href={event.link}
          className="text-primary hover:underline transition-colors"
        >
          Learn More →
        </Link>
      </div>
    </div>
  )
}
