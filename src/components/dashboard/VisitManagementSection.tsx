import { useState } from 'react'
import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../icons/Icon'
import VisitCard from './VisitCard'
import { homeAreaVisits, type AreaVisit } from './visitsData'

interface VisitManagementSectionProps {
  onCreateNewVisit?: () => void
  onSeeAll?: () => void
  onOverviewDashboard?: () => void
  onViewDetails?: (visit: AreaVisit) => void
}

type DemoVisitState = 'none' | 'scheduled' | 'active'

const demoStateOptions: { value: DemoVisitState; label: string }[] = [
  { value: 'none', label: 'No Visit' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'active', label: 'Active' },
]

const demoVisit = {
  title: 'North Muscat Coverage',
  location: 'Region · Wilaya · locality',
  startDay: '09',
  startMonth: 'Aug',
  daysRemaining: 2,
  endDate: '10 Aug 2023',
  startedDate: '9 Aug',
  completed: 18,
}

function DemoStateSwitcher({ value, onChange }: { value: DemoVisitState; onChange: (v: DemoVisitState) => void }) {
  return (
    <div className="mb-3 flex items-center gap-2 rounded-[4px] bg-gray-50 px-2 py-1.5">
      <span className="pl-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">Demo</span>
      <div className="flex flex-1 gap-1">
        {demoStateOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={value === option.value}
            className={`flex-1 rounded-full px-2 py-1 text-[11px] font-semibold transition-colors ${
              value === option.value ? 'bg-rose-600 text-white' : 'text-gray-500 hover:bg-gray-200'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function NoVisitState({ onStartNewAreaVisit }: { onStartNewAreaVisit?: () => void }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-[4px] bg-gray-50 px-4 py-6 text-center">
      <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-white text-gray-400 shadow-sm">
        <Icon name="info" className="h-5 w-5" />
      </span>
      <p className="text-sm font-semibold text-gray-900">No active and scheduled visits</p>
      <p className="text-xs text-gray-400">Start a new visit to begin collecting customer visits.</p>
      <button
        type="button"
        onClick={onStartNewAreaVisit}
        className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-rose-600 hover:text-rose-700"
      >
        <Icon name="plus" className="h-4 w-4" />
        Start New Area Visit
      </button>
    </div>
  )
}

export default function VisitManagementSection({
  onCreateNewVisit,
  onSeeAll,
  onOverviewDashboard,
  onViewDetails,
}: VisitManagementSectionProps) {
  const [demoState, setDemoState] = useState<DemoVisitState>('scheduled')

  return (
    <div className="px-4 py-2">
      <Card>
        <SectionHeader title="Customer visit Management" actionLabel="See all" onAction={onSeeAll} />

        <DemoStateSwitcher value={demoState} onChange={setDemoState} />

        <button
          type="button"
          onClick={onOverviewDashboard}
          className="mb-3 flex w-full items-center gap-3 rounded-[4px] bg-gray-50 px-3 py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-600">
            <Icon name="gauge" className="h-4 w-4" />
          </span>
          <span className="flex-1 text-left text-sm font-medium text-gray-800">Overview Dashboard</span>
          <Icon name="chevronRight" className="h-4 w-4 text-gray-400" />
        </button>

        {demoState === 'none' ? (
          <NoVisitState onStartNewAreaVisit={onCreateNewVisit} />
        ) : (
          <>
            {demoState === 'scheduled' ? (
              <VisitCard
                variant="scheduled"
                title={demoVisit.title}
                startDay={demoVisit.startDay}
                startMonth={demoVisit.startMonth}
                daysRemaining={demoVisit.daysRemaining}
                endDate={demoVisit.endDate}
                location={demoVisit.location}
              />
            ) : (
              <VisitCard
                variant="active"
                title={demoVisit.title}
                startedDate={demoVisit.startedDate}
                completed={demoVisit.completed}
                location={demoVisit.location}
              />
            )}

            <div className="mt-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onViewDetails?.(homeAreaVisits[demoState])}
                className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
              >
                Visit Details
              </button>
              <button
                type="button"
                onClick={onCreateNewVisit}
                className="w-full rounded-full bg-rose-50 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-100 active:bg-rose-200 transition-colors"
              >
                Create New Visit
              </button>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
