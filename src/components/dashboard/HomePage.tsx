import GreetingCard from './GreetingCard'
import PromoBanner from './PromoBanner'
import PerformanceSection from './PerformanceSection'
import EReloadSection from './EReloadSection'
import OverviewSection from './OverviewSection'
import CustomerActivitiesSection from './CustomerActivitiesSection'
import InventoryDashboardSection from './InventoryDashboardSection'
import StockManagementSection from './StockManagementSection'
import VisitManagementSection from './VisitManagementSection'
import KPIsSection from './KPIsSection'
import B2BActivitiesSection from './B2BActivitiesSection'
import ChannelMemberOnboardingSection from './ChannelMemberOnboardingSection'

interface HomePageProps {
  userName?: string
  userId?: string
  onCreateNewVisit?: () => void
  onSeeAllVisits?: () => void
}

export default function HomePage({
  userName = 'Omer',
  userId = 'D111123333',
  onCreateNewVisit,
  onSeeAllVisits,
}: HomePageProps) {
  return (
    <div>
      <GreetingCard name={userName} id={userId} />
      <PromoBanner />
      <PerformanceSection />
      <EReloadSection />
      <OverviewSection />
      <CustomerActivitiesSection />
      <InventoryDashboardSection />
      <StockManagementSection />
      <VisitManagementSection onCreateNewVisit={onCreateNewVisit} onSeeAll={onSeeAllVisits} />
      <KPIsSection />
      <B2BActivitiesSection />
      <ChannelMemberOnboardingSection />
    </div>
  )
}
