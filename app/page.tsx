import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import HeroSection from '@/components/sections/HeroSection'
import EventsSection from '@/components/sections/EventsSection'
import ReportsSection from '@/components/sections/ReportsSection'
import GallerySection from '@/components/sections/GallerySection'
import TeamSection from '@/components/sections/TeamSection'

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <ReportsSection />
        <GallerySection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
