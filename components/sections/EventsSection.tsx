import EventCard from '@/components/ui/EventCard'
import { events } from '@/lib/constants'

export default function EventsSection() {
  const gridCols =
    events.length === 1
      ? 'grid-cols-1 justify-items-center'
      : events.length === 2
      ? 'md:grid-cols-2 justify-items-center'
      : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="py-16" id="events">
      <h3 className="text-3xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        Upcoming Events
      </h3>

      <div className={`grid gap-8 ${gridCols} auto-rows-fr items-stretch`}>
        {events.map((event) => (
          <div key={event.id} className="w-full h-full flex">
            <div className="flex-1 h-full flex flex-col">
              <EventCard event={event} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
