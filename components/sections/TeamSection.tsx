import TeamMember from '@/components/ui/TeamMember'
import { teamMembers } from '@/lib/constants'

export default function TeamSection() {
  return (
    <section className="py-16" id="team">
      <h3 className="text-3xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        Meet the Team
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}
