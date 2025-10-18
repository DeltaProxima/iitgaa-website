import ReportItem from '@/components/ui/ReportItem'
import { reports } from '@/lib/constants'

export default function ReportsSection() {
  return (
    <section className="py-16 bg-white dark:bg-zinc-800 rounded-lg" id="reports">
      <h3 className="text-3xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        Event Reports
      </h3>
      <div className="space-y-8 max-w-4xl mx-auto">
        {reports.map((report) => (
          <ReportItem key={report.id} report={report} />
        ))}
      </div>
    </section>
  )
}
