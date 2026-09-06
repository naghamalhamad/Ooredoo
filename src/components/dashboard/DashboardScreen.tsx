import { useState } from 'react'
import TopBar from './TopBar'
import HomePage from './HomePage'
import ServicesPage from './ServicesPage'
import SettingsPage from './SettingsPage'
import CreateVisitPage from './CreateVisitPage'
import VisitListPage from './VisitListPage'
import AreaVisitDetailsPage from './AreaVisitDetailsPage'
import HomeVisitsPage from './HomeVisitsPage'
import BottomNav, { type Page } from './BottomNav'
import type { AreaVisit } from './visitsData'

type Route = 'tabs' | 'visitList' | 'createVisit' | 'visitDetails' | 'homeVisits'

export default function DashboardScreen() {
  const [page, setPage] = useState<Page>('Home')
  const [stack, setStack] = useState<Route[]>(['tabs'])
  const [selectedVisit, setSelectedVisit] = useState<AreaVisit | null>(null)
  const current = stack[stack.length - 1]

  const push = (route: Route) => setStack((s) => [...s, route])
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))

  const openVisitDetails = (visit: AreaVisit) => {
    setSelectedVisit(visit)
    push('visitDetails')
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 sm:items-center sm:py-6">
      <div className="flex w-full max-w-sm flex-1 flex-col bg-gray-100 sm:min-h-[90vh] sm:rounded-3xl sm:shadow-xl sm:overflow-hidden">
        {current === 'createVisit' && (
          <CreateVisitPage onBack={pop} onDiscard={pop} onSubmit={pop} />
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

        {current === 'tabs' && (
          <>
            <TopBar />

            <main className="flex-1 pb-4">
              {page === 'Home' && (
                <HomePage
                  onCreateNewVisit={() => push('createVisit')}
                  onSeeAllVisits={() => push('visitList')}
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
