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
import BottomNav, { type Page } from './BottomNav'
import {
  homeAreaVisit,
  defaultDashboardFilters,
  dealerWorkingPeriod,
  type AreaVisit,
  type DashboardFilters,
} from './visitsData'

type Route = 'tabs' | 'visitList' | 'createVisit' | 'visitDetails' | 'homeVisits' | 'visitsDashboard' | 'filters'

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
            onStartAreaVisit={() => push('homeVisits')}
          />
        )}

        {current === 'homeVisits' && selectedVisit && (
          <HomeVisitsPage homeVisits={selectedVisit.homeVisits} onBack={pop} />
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
                  onViewVisitDetails={() => openVisitDetails(homeAreaVisit)}
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
