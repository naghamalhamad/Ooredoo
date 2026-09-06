import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../icons/Icon'
import VisitCard from './VisitCard'

interface VisitManagementSectionProps {
  onCreateNewVisit?: () => void
  onSeeAll?: () => void
  onOverviewDashboard?: () => void
  onViewDetails?: () => void
}

export default function VisitManagementSection({
  onCreateNewVisit,
  onSeeAll,
  onOverviewDashboard,
  onViewDetails,
}: VisitManagementSectionProps) {
  return (
    <div className="px-4 py-2">
      <Card>
        <SectionHeader title="Customer visit Management" actionLabel="See all" onAction={onSeeAll} />
        <hr className="mb-3 border-gray-100" />

        <button
          type="button"
          onClick={onOverviewDashboard}
          className="mb-3 flex w-full items-center gap-3 rounded-lg bg-gray-50 px-3 py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-600">
            <Icon name="gauge" className="h-4 w-4" />
          </span>
          <span className="flex-1 text-left text-sm font-medium text-gray-800">Overview Dashboard</span>
          <Icon name="chevronRight" className="h-4 w-4 text-gray-400" />
        </button>

        <VisitCard
          title="North Muscat Coverage"
          startDay="09"
          startMonth="Aug"
          daysRemaining={2}
          endDate="10 Aug 2023"
          location="Region · Wilaya · locality"
        />

        <div className="mt-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={onViewDetails}
            className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
          >
            Visit Details
          </button>
          <button
            type="button"
            onClick={onCreateNewVisit}
            className="w-full rounded-full border border-rose-600 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
          >
            Create New Visit
          </button>
        </div>
      </Card>
    </div>
  )
}
