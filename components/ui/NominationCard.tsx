import Link from 'next/link'
import { NominationOpportunity } from '@/lib/types'

interface NominationCardProps {
  opportunity: NominationOpportunity
}

export default function NominationCard({ opportunity }: NominationCardProps) {
  const isPastDeadline = new Date(opportunity.deadline) < new Date()
  const deadlineDate = new Date(opportunity.deadline)
  const formattedDeadline = deadlineDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className={`bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-l-[6px] ${
      opportunity.type === 'nomination' 
        ? 'border-yellow-600 dark:border-yellow-700 shadow-yellow-600/10 dark:shadow-yellow-700/10' 
        : 'border-green-700 dark:border-green-600 shadow-green-700/10 dark:shadow-green-600/10'
    } ${isPastDeadline ? 'opacity-60' : ''}`}>
      <div className="p-6 sm:p-8 md:p-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
            opportunity.type === 'nomination'
              ? 'bg-yellow-600/20 text-yellow-800 dark:bg-yellow-700/30 dark:text-yellow-500'
              : 'bg-green-700/20 text-green-800 dark:bg-green-600/30 dark:text-green-400'
          }`}>
            {opportunity.type === 'nomination' ? 'Nomination' : 'Volunteer Opportunity'}
          </span>
          {isPastDeadline && (
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-gray-500/20 text-gray-700 dark:bg-gray-500/30 dark:text-gray-400">
              Closed
            </span>
          )}
        </div>
        
        <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-text-light dark:text-text-dark">
          {opportunity.title}
        </h4>
        
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
          {opportunity.description}
        </p>
        
        <div className="flex items-center text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <span className={isPastDeadline ? 'line-through' : ''}>
            Deadline: {formattedDeadline}
          </span>
        </div>
        
        <Link 
          href={opportunity.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center text-base sm:text-lg font-bold transition-colors ${
            opportunity.type === 'nomination'
              ? 'text-yellow-700 dark:text-yellow-600 hover:text-yellow-800 dark:hover:text-yellow-500'
              : 'text-green-700 dark:text-green-600 hover:text-green-800 dark:hover:text-green-500'
          } ${
            isPastDeadline ? 'pointer-events-none opacity-50' : ''
          }`}
        >
          {opportunity.type === 'nomination' ? 'Submit Nomination' : 'Apply Now'}
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

