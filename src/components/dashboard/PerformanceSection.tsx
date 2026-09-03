import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader'
import UsageMeter from '../ui/UsageMeter'

export default function PerformanceSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <SectionHeader title="Performance" />
        <hr className="mb-3 border-gray-100" />
        <div className="flex items-start justify-between">
          <UsageMeter
            value={5}
            max={15}
            displayValue="5/15"
            label="Achievement/ Target"
            color="#3B82F6"
          />
          <UsageMeter
            value={1000}
            max={1000}
            displayValue="1000"
            label="Earned commission"
            color="#DC2626"
          />
          <UsageMeter
            value={90}
            max={100}
            displayValue="90%"
            label="Order quality"
            color="#10B981"
          />
        </div>
      </Card>
    </div>
  )
}
