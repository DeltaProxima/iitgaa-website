import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import NominationCard from '@/components/ui/NominationCard'
import { nominations, volunteerOpportunities, APPLICATION_FORM_LINK } from '@/lib/constants'

export const metadata = {
  title: 'Nominations & Volunteer Opportunities | IIT Guwahati Alumni Association',
  description: 'View active nominations and volunteer opportunities to get involved with the IITGAA community.',
}

export default function NominationsPage() {
  // Filter active opportunities (deadline not passed)
  const activeNominations = nominations.filter(
    opp => new Date(opp.deadline) >= new Date()
  )
  const activeVolunteers = volunteerOpportunities.filter(
    opp => new Date(opp.deadline) >= new Date()
  )
  
  // Get all opportunities (including past ones) for display
  const allNominations = nominations
  const allVolunteers = volunteerOpportunities

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="py-8 sm:py-12 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-text-light dark:text-text-dark px-4">
            Nominations & Volunteer Opportunities
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Get involved with the IITGAA community. View active nominations for leadership positions and volunteer opportunities to contribute to various activities.
          </p>
        </div>

        {/* Nominations Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark">
              Active Nominations
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {activeNominations.length} {activeNominations.length === 1 ? 'opportunity' : 'opportunities'}
            </span>
          </div>
          
          {allNominations.length === 0 ? (
            <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-6 sm:p-8 text-center mx-4 sm:mx-0">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                No nominations are currently open. Check back soon for new opportunities!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 px-4 sm:px-0">
              {allNominations.map((nomination) => (
                <NominationCard key={nomination.id} opportunity={nomination} />
              ))}
            </div>
          )}
        </section>

        {/* Volunteer Opportunities Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark">
              Volunteer Opportunities
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {activeVolunteers.length} {activeVolunteers.length === 1 ? 'opportunity' : 'opportunities'}
            </span>
          </div>
          
          {allVolunteers.length === 0 ? (
            <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-6 sm:p-8 text-center mx-4 sm:mx-0">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                No volunteer opportunities are currently available. Check back soon for new ways to get involved!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 px-4 sm:px-0">
              {allVolunteers.map((opportunity) => (
                <NominationCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          )}
        </section>

        {/* Information Section */}
        <section className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-5 sm:p-6 md:p-8 mx-4 sm:mx-0">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-text-light dark:text-text-dark">
            How to Apply
          </h3>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <p>
              All nominations and volunteer applications are processed through a single Google Form. 
              Click on any opportunity above to access the application form.
            </p>
            <p>
              <strong>Note:</strong> Make sure to submit your application before the deadline. 
              Late submissions may not be considered.
            </p>
            {/* <p className="pt-2 break-words">
              <strong>Direct Form Link:</strong>{' '}
              <a 
                href={APPLICATION_FORM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {APPLICATION_FORM_LINK}
              </a>
            </p> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

