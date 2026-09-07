import { useState } from 'react'
import TopBar from './TopBar'
import HomePage from './HomePage'
import ServicesPage from './ServicesPage'
import SettingsPage from './SettingsPage'
import CreateVisitPage from './CreateVisitPage'
import VisitListPage from './VisitListPage'
import AreaVisitDetailsPage from './AreaVisitDetailsPage'
import HomeVisitsPage from './HomeVisitsPage'
import VisitsDashboardPage from './VisitsDashboardPage'
import FiltersPage from './FiltersPage'
import DoorStatusPage from './DoorStatusPage'
import CustomerInterestPage from './CustomerInterestPage'
import BottomNav, { type Page } from './BottomNav'
import {
  defaultDashboardFilters,
  dealerWorkingPeriod,
  customerInterestStatusMap,
  type AreaVisit,
  type DashboardFilters,
  type CustomerInterestOption,
} from './visitsData'

type Route =
  | 'tabs'
  | 'visitList'
  | 'createVisit'
  | 'visitDetails'
  | 'homeVisits'
  | 'visitsDashboard'
  | 'filters'
  | 'doorStatus'
  | 'customerInterest'

export default function DashboardScreen() {
  const [page, setPage] = useState<Page>('Home')
  const [stack, setStack] = useState<Route[]>(['tabs'])
  const [selectedVisit, setSelectedVisit] = useState<AreaVisit | null>(null)
  const [dashboardFilters, setDashboardFilters] = useState<DashboardFilters>(defaultDashboardFilters)
  const current = stack[stack.length - 1]

  const push = (route: Route) => setStack((s) => [...s, route])
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))

  const openVisitDetails = (visit: AreaVisit) => {
    setSelectedVisit(visit)
    push('visitDetails')
  }

  const addHomeVisit = (status: AreaVisit['homeVisits'][number]['status'], hotLead = false) => {
    setSelectedVisit((visit) => {
      if (!visit) return visit
      const newVisit = {
        status,
        title: 'Ahmad Mohammad',
        datetime: new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        hotLead,
      }
      return { ...visit, homeVisits: [newVisit, ...visit.homeVisits], completedHomeVisits: visit.completedHomeVisits + 1 }
    })
    setStack((s) => {
      let end = s.length
      while (end > 0 && (s[end - 1] === 'doorStatus' || s[end - 1] === 'customerInterest')) end--
      return s.slice(0, end)
    })
  }

  const handleDoorClosed = () => addHomeVisit('Door Closed')

  const handleCustomerInterestSubmit = (option: CustomerInterestOption) => {
    addHomeVisit(customerInterestStatusMap[option])
  }

  const handleStartAreaVisit = () => {
    setSelectedVisit((visit) => (visit ? { ...visit, started: true } : visit))
  }

  const handleAddHomeVisit = () => {
    setSelectedVisit((visit) => (visit ? { ...visit, started: true } : visit))
    push('doorStatus')
  }

  const removeFilter = (key: 'dateRange' | 'region' | 'wilaya') => {
    setDashboardFilters((f) => {
      if (key === 'dateRange') {
        return { ...f, dateFrom: dealerWorkingPeriod.dateFrom, dateTo: dealerWorkingPeriod.dateTo }
      }
      if (key === 'region') return { ...f, region: 'All Regions' }
      return { ...f, wilaya: 'All Wilayas' }
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 sm:items-center sm:py-6">
      <div className="flex w-full flex-1 flex-col bg-gray-100 sm:max-w-sm sm:min-h-[90vh] sm:rounded-3xl sm:shadow-xl sm:overflow-hidden">
        {current === 'createVisit' && (
          <CreateVisitPage onBack={pop} onDiscard={pop} onSubmit={() => setStack(['tabs', 'visitList'])} />
        )}

        {current === 'visitList' && (
          <VisitListPage onBack={pop} onCreateNew={() => push('createVisit')} onSelectVisit={openVisitDetails} />
        )}

        {current === 'visitDetails' && selectedVisit && (
          <AreaVisitDetailsPage
            visit={selectedVisit}
            onBack={pop}
            onClose={() => setStack(['tabs'])}
            onStartAreaVisit={handleStartAreaVisit}
            onAddHomeVisit={handleAddHomeVisit}
            onViewHomeVisits={() => push('homeVisits')}
          />
        )}

        {current === 'homeVisits' && selectedVisit && (
          <HomeVisitsPage
            homeVisits={selectedVisit.homeVisits}
            onBack={pop}
            onStartHomeVisit={() => push('doorStatus')}
          />
        )}

        {current === 'doorStatus' && (
          <DoorStatusPage
            onBack={pop}
            onClose={() => setStack(['tabs'])}
            onDoorClosed={handleDoorClosed}
            onDoorOpen={() => push('customerInterest')}
          />
        )}

        {current === 'customerInterest' && (
          <CustomerInterestPage
            onBack={pop}
            onClose={() => setStack(['tabs'])}
            onSubmit={handleCustomerInterestSubmit}
          />
        )}

        {current === 'visitsDashboard' && (
          <VisitsDashboardPage
            filters={dashboardFilters}
            onBack={pop}
            onOpenFilters={() => push('filters')}
            onRemoveFilter={removeFilter}
          />
        )}

        {current === 'filters' && (
          <FiltersPage
            initialFilters={dashboardFilters}
            onBack={pop}
            onApply={(filters) => {
              setDashboardFilters(filters)
              pop()
            }}
          />
        )}

        {current === 'tabs' && (
          <>
            <TopBar />

            <main className="flex-1 pb-4">
              {page === 'Home' && (
                <HomePage
                  onCreateNewVisit={() => push('createVisit')}
                  onSeeAllVisits={() => push('visitList')}
                  onOverviewDashboard={() => push('visitsDashboard')}
                  onViewVisitDetails={openVisitDetails}
                />
              )}
              {page === 'Services' && <ServicesPage />}
              {page === 'Settings' && <SettingsPage />}
            </main>

            <BottomNav active={page} onChange={setPage} />
          </>
        )}
      </div>
    </div>
  )
}
