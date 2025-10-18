import Image from 'next/image'
import { TeamMember as TeamMemberType } from '@/lib/types'

interface TeamMemberProps {
  member: TeamMemberType
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="text-center">
      <Image
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        src={member.imageUrl}
        width={128}
        height={128}
      />
      <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
        {member.name}
      </h4>
      <p className="text-primary">{member.role}</p>
    </div>
  )
}
