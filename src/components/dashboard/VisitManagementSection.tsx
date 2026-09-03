import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader'
import VisitCard from './VisitCard'

export default function VisitManagementSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <SectionHeader title="Visit Management" actionLabel="See all" />
        <hr className="mb-3 border-gray-100" />
        <VisitCard
          visitName="Visit name"
          visitType="Visit type"
          startDate="9 Aug, 2023"
          endDate="18 Aug, 2023"
          dealerName="Channel member name"
          dealerCode="Channel member code"
        />
      </Card>
    </div>
  )
}
