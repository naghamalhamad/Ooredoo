import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader'
import StatCard from '../ui/StatCard'

const stats = [
  { value: '100', label: 'SIM' },
  { value: '15', label: 'Router' },
  { value: '200', label: '5G HSS SIM' },
  { value: '3000', label: 'E-SIM' },
]

export default function InventoryDashboardSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <SectionHeader title="Inventory Dashboard" actionLabel="See all" />
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Card>
    </div>
  )
}
