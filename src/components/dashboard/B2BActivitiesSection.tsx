import type { IconName } from '../icons/Icon'
import Card from '../ui/Card'
import IconGridButton from '../ui/IconGridButton'

export const b2bActivities: { icon: IconName; label: string }[] = [
  { icon: 'hash', label: 'KPI registration' },
  { icon: 'sim', label: 'Prepaid' },
  { icon: 'billPayment', label: 'Postpaid' },
  { icon: 'ticket', label: 'Trouble Ticket' },
]

export default function B2BActivitiesSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="mb-3 text-base font-semibold text-gray-900">B2B Activities</h2>
        <div className="grid grid-cols-4 gap-x-1 gap-y-3">
          {b2bActivities.map((activity) => (
            <IconGridButton key={activity.label} icon={activity.icon} label={activity.label} />
          ))}
        </div>
      </Card>
    </div>
  )
}
