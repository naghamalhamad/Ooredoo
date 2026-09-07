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
import HomeDetailsModal from './HomeDetailsModal'
import CustomerInterestPage from './CustomerInterestPage'
import CustomerDetailsPage from './CustomerDetailsPage'
import SurveyIntroPage from './SurveyIntroPage'
import SurveyQuestionsPage from './SurveyQuestionsPage'
import HomeVisitCompletedPage from './HomeVisitCompletedPage'
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
  | 'customerInterest'
  | 'customerDetails'
  | 'surveyIntro'
  | 'surveyQuestions'
  | 'homeVisitCompleted'

const transientHomeVisitRoutes: Route[] = [
  'customerInterest',
  'customerDetails',
  'surveyIntro',
  'surveyQuestions',
  'homeVisitCompleted',
]

export default function DashboardScreen() {
  const [page, setPage] = useState<Page>('Home')
  const [stack, setStack] = useState<Route[]>(['tabs'])
  const [selectedVisit, setSelectedVisit] = useState<AreaVisit | null>(null)
  const [dashboardFilters, setDashboardFilters] = useState<DashboardFilters>(defaultDashboardFilters)
  const [showHomeDetailsModal, setShowHomeDetailsModal] = useState(false)
  const [customerDetailsIntent, setCustomerDetailsIntent] = useState<'later' | 'survey'>('later')
  const [pendingCustomerName, setPendingCustomerName] = useState('')
  const current = stack[stack.length - 1]

  const push = (route: Route) => setStack((s) => [...s, route])
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))

  const openVisitDetails = (visit: AreaVisit) => {
    setSelectedVisit(visit)
    push('visitDetails')
  }

  const addHomeVisit = (
    status: AreaVisit['homeVisits'][number]['status'],
    options?: { hotLead?: boolean; title?: string },
  ) => {
    setSelectedVisit((visit) => {
      if (!visit) return visit
      const newVisit = {
        status,
        title: options?.title || (status === 'Door Closed' ? 'Al Ghubrah Ash Shamaliyah, Muscat' : 'Ahmad Mohammad'),
        datetime: new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        hotLead: options?.hotLead ?? false,
      }
      return { ...visit, homeVisits: [newVisit, ...visit.homeVisits], completedHomeVisits: visit.completedHomeVisits + 1 }
    })
  }

  const closeHomeVisitFlow = () => {
    setStack((s) => {
      let end = s.length
      while (end > 0 && transientHomeVisitRoutes.includes(s[end - 1])) end--
      return s.slice(0, end)
    })
  }

  const handleDoorClosed = () => {
    setShowHomeDetailsModal(false)
    addHomeVisit('Door Closed')
    closeHomeVisitFlow()
  }

  const handleDoorOpen = () => {
    setShowHomeDetailsModal(false)
    push('customerInterest')
  }

  const handleCustomerInterestSubmit = (option: CustomerInterestOption) => {
    if (option === 'Interested Later') {
      setCustomerDetailsIntent('later')
      push('customerDetails')
      return
    }
    if (option === 'Not Interested, start survey') {
      setCustomerDetailsIntent('survey')
      push('customerDetails')
      return
    }
    addHomeVisit(customerInterestStatusMap[option])
    closeHomeVisitFlow()
  }

  const handleCustomerDetailsSubmit = (customerName: string) => {
    if (customerDetailsIntent === 'survey') {
      setPendingCustomerName(customerName)
      push('surveyIntro')
      return
    }
    addHomeVisit('Interested Later', { hotLead: true, title: customerName })
    closeHomeVisitFlow()
  }

  const handleSurveyComplete = () => {
    addHomeVisit('Not Interested', { title: pendingCustomerName })
    push('homeVisitCompleted')
  }

  const handleStartAreaVisit = () => {
    setSelectedVisit((visit) => (visit ? { ...visit, started: true } : visit))
  }

  const handleAddHomeVisit = () => {
    setSelectedVisit((visit) => (visit ? { ...visit, started: true } : visit))
    setShowHomeDetailsModal(true)
  }

  const handleEndAreaVisit = () => {
    setSelectedVisit((visit) => (visit ? { ...visit, status: 'Completed' } : visit))
    setStack(['tabs'])
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
            onEndAreaVisit={handleEndAreaVisit}
          />
        )}

        {current === 'homeVisits' && selectedVisit && (
          <HomeVisitsPage
            homeVisits={selectedVisit.homeVisits}
            onBack={pop}
            onStartHomeVisit={() => setShowHomeDetailsModal(true)}
          />
        )}

        {current === 'customerInterest' && (
          <CustomerInterestPage
            onBack={pop}
            onClose={() => setStack(['tabs'])}
            onSubmit={handleCustomerInterestSubmit}
          />
        )}

        {current === 'customerDetails' && (
          <CustomerDetailsPage
            onBack={pop}
            onSubmit={handleCustomerDetailsSubmit}
            submitLabel={customerDetailsIntent === 'survey' ? 'Start Survey' : 'Submit'}
          />
        )}

        {current === 'surveyIntro' && (
          <SurveyIntroPage
            visitDate={new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            surveyedBy="Omer"
            onBack={pop}
            onClose={() => setStack(['tabs'])}
            onStart={() => push('surveyQuestions')}
          />
        )}

        {current === 'surveyQuestions' && (
          <SurveyQuestionsPage onBack={pop} onClose={() => setStack(['tabs'])} onComplete={handleSurveyComplete} />
        )}

        {current === 'homeVisitCompleted' && (
          <HomeVisitCompletedPage onBack={closeHomeVisitFlow} onClose={closeHomeVisitFlow} onDone={closeHomeVisitFlow} />
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

      {showHomeDetailsModal && (
        <HomeDetailsModal
          onCancel={() => setShowHomeDetailsModal(false)}
          onDoorOpen={handleDoorOpen}
          onDoorClosed={handleDoorClosed}
        />
      )}
    </div>
  )
}
