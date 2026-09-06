import Card from '../ui/Card'
import Icon, { type IconName } from '../icons/Icon'

interface VisitsDashboardPageProps {
  onBack?: () => void
}

function StatTile({
  icon,
  iconBg,
  iconColor,
  label,
  value,
}: {
  icon: IconName
  iconBg: string
  iconColor: string
  label: string
  value: string
}) {
  return (
    <div className="rounded-[4px] bg-gray-50 p-3">
      <span className={`flex h-9 w-9 items-center justify-center rounded-[4px] ${iconBg} ${iconColor}`}>
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <p className="mt-2 text-xs text-gray-400">{label}</p>
      <p className="text-lg font-bold text-gray-900">{value}</p>
    </div>
  )
}

function InsightRow({
  icon,
  iconBg,
  iconColor,
  title,
  subtitle,
}: {
  icon: IconName
  iconBg: string
  iconColor: string
  title: string
  subtitle: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-[4px] bg-gray-50 px-3 py-3">
      <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[4px] ${iconBg} ${iconColor}`}>
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  )
}

export default function VisitsDashboardPage({ onBack }: VisitsDashboardPageProps) {
  return (
    <div className="flex flex-1 flex-col bg-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-base font-semibold text-gray-900">Visits Dashboard</h1>
        <button type="button" aria-label="Filters" className="text-gray-900">
          <Icon name="sliders" className="h-5 w-5" />
        </button>
      </div>

      <p className="px-4 pb-2 text-xs text-gray-400">9 Aug 2023 - 20 Aug 2023 &bull; All Regions &bull; All Wilayas</p>

      <div className="px-4 py-2">
        <Card>
          <h2 className="pb-3 text-base font-semibold text-gray-900">Customers Visit Management</h2>
          <hr className="mb-3 border-gray-100" />

          <div className="flex items-center gap-3 rounded-[4px] bg-gray-50 px-3 py-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600">
              <Icon name="mapPin" className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-xs text-gray-400">Total Visits Performed</p>
              <p className="text-lg font-bold text-gray-900">200</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">+16%</span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <StatTile icon="checkCircle" iconBg="bg-emerald-100" iconColor="text-emerald-600" label="Activations" value="40" />
            <StatTile icon="star" iconBg="bg-amber-100" iconColor="text-amber-600" label="Leads Generated" value="40" />
          </div>
        </Card>
      </div>

      <div className="px-4 py-2">
        <Card>
          <h2 className="pb-3 text-base font-semibold text-gray-900">Insights</h2>
          <hr className="mb-3 border-gray-100" />
          <div className="flex flex-col gap-2">
            <InsightRow
              icon="trendUp"
              iconBg="bg-emerald-100"
              iconColor="text-emerald-600"
              title="Activations up 16%"
              subtitle="Strongest week so far this month"
            />
            <InsightRow
              icon="medal"
              iconBg="bg-blue-100"
              iconColor="text-blue-600"
              title="Top Wilaya: Bawshar"
              subtitle="47 visits · 21 activations"
            />
            <InsightRow
              icon="star"
              iconBg="bg-amber-100"
              iconColor="text-amber-600"
              title="5 leads need follow-up"
              subtitle="Older than 48 hours without contact"
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
