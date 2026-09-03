import ProfileHeader from './ProfileHeader'
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
import BottomNav from './BottomNav'

interface DashboardScreenProps {
  userName?: string
  userId?: string
}

export default function DashboardScreen({
  userName = 'Omer',
  userId = 'D111123333',
}: DashboardScreenProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 sm:items-center sm:py-6">
      <div className="flex w-full max-w-sm flex-1 flex-col bg-gray-100 sm:min-h-[90vh] sm:rounded-3xl sm:shadow-xl sm:overflow-hidden">
        <ProfileHeader name={userName} id={userId} />

        <main className="flex-1 pb-4">
          <PromoBanner />
          <PerformanceSection />
          <EReloadSection />
          <OverviewSection />
          <CustomerActivitiesSection />
          <InventoryDashboardSection />
          <StockManagementSection />
          <VisitManagementSection />
          <KPIsSection />
          <B2BActivitiesSection />
          <ChannelMemberOnboardingSection />
        </main>

        <BottomNav />
      </div>
    </div>
  )
}
