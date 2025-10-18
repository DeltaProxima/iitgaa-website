import Image from 'next/image'
import Link from 'next/link'
import { Report } from '@/lib/types'

interface ReportItemProps {
  report: Report
}

export default function ReportItem({ report }: ReportItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Image
        alt={report.title}
        className="w-full sm:w-48 h-32 object-cover rounded"
        src={report.imageUrl}
        width={192}
        height={128}
      />
      <div>
        <h4 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">
          {report.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          {report.description}
        </p>
        <Link 
          href={report.reportLink}
          className="text-primary hover:underline transition-colors"
        >
          Read Full Report
        </Link>
      </div>
    </div>
  )
}
