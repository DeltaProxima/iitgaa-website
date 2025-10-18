import Image from "next/image"
import { iitgaa_logoUrl,iitg_LogoUrl } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="text-center py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-text-light dark:text-text-dark">
        Connecting Alumni, <span className="text-primary">Forever.</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Welcome to the official platform for the alumni of the Indian Institute of Technology Guwahati. 
        Reconnect, share, and grow with your fellow graduates.
      </p>
      {/* Add the logos of IITG and IITGAA below this */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-16 space-y-8 sm:space-y-0 mt-8">
        <Image
          alt="IIT Guwahati Logo"
          className="h-32 w-32 sm:h-48 sm:w-48"
          width={64}
          height={64}
          src={iitg_LogoUrl}
        />
        <Image
          alt="IITGAA Logo"
          className="h-32 w-32 sm:h-48 sm:w-48"
          width={64}
          height={64}
          src={iitgaa_logoUrl}
        />
      </div>

    </section>
  )
}
