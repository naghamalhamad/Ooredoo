import type { IconName } from '../icons/Icon'
import Card from '../ui/Card'
import IconGridButton from '../ui/IconGridButton'
import { eReloadActions } from './EReloadSection'
import { customerActivities } from './CustomerActivitiesSection'
import { stockActions } from './StockManagementSection'
import { b2bActivities } from './B2BActivitiesSection'

interface ServiceGroupProps {
  title: string
  items: { icon: IconName; label: string }[]
  iconColor?: string
}

function ServiceGroup({ title, items, iconColor }: ServiceGroupProps) {
  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="mb-3 text-base font-semibold text-gray-900">{title}</h2>
        <div className="grid grid-cols-4 gap-x-1 gap-y-3">
          {items.map((item, i) => (
            <IconGridButton
              key={`${item.label}-${i}`}
              icon={item.icon}
              label={item.label}
              iconColor={iconColor}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div>
      <div className="px-4 pt-3">
        <h1 className="text-xl font-bold text-gray-900">Services</h1>
        <p className="mt-0.5 text-sm text-gray-500">Everything you can do for your customers, in one place.</p>
      </div>
      <ServiceGroup title="E-Reload" items={eReloadActions} />
      <ServiceGroup title="Customer Activities" items={customerActivities} iconColor="#3CDBC0" />
      <ServiceGroup title="Stock Management" items={stockActions} />
      <ServiceGroup title="B2B Activities" items={b2bActivities} />
    </div>
  )
}
